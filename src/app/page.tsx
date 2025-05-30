'use client';

import { useState, useEffect } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('students');
  const [revealedFeatures, setRevealedFeatures] = useState<number[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const handleFeatureReveal = (index: number) => {
    if (!revealedFeatures.includes(index)) {
      setRevealedFeatures([...revealedFeatures, index]);
    }
  };

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', background: '#fdfcf8', color: '#374151', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: 'rgba(253, 252, 248, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(139, 109, 71, 0.1)',
        transition: 'all 0.3s ease'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem'
            }}>
              A
            </div>
            <span style={{
              fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
              fontWeight: '700',
              color: '#1f2937',
              fontFamily: 'Playfair Display, serif'
            }}>AcademAI</span>
          </div>
          
          {/* Desktop Navigation */}
          <ul style={{
            display: isMobile ? 'none' : 'flex',
            gap: '2rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#vision" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Vision</a></li>
            <li><a href="#approach" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Approach</a></li>
            <li><a href="#progress" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Progress</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Contact</a></li>
          </ul>
          
          {/* Desktop CTA Buttons */}
          <div style={{ 
            display: isMobile ? 'none' : 'flex',
            gap: '1rem', 
            alignItems: 'center' 
          }}>
            <button style={{
              background: 'transparent',
              color: '#3b82f6',
              padding: '0.6rem 1.2rem',
              border: '1px solid #3b82f6',
              borderRadius: '6px',
              fontWeight: '500',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              Learn More
            </button>
            <button style={{
              background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
              color: 'white',
              padding: '0.6rem 1.2rem',
              borderRadius: '6px',
              border: 'none',
              fontWeight: '500',
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}>
              Get Notified
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: isMobile ? 'block' : 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#374151'
            }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(253, 252, 248, 0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(139, 109, 71, 0.1)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            <a href="#vision" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', padding: '0.5rem 0' }}>Vision</a>
            <a href="#approach" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', padding: '0.5rem 0' }}>Approach</a>
            <a href="#progress" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', padding: '0.5rem 0' }}>Progress</a>
            <a href="#contact" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', padding: '0.5rem 0' }}>Contact</a>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              marginTop: '1rem'
            }}>
              <button style={{
                background: 'transparent',
                color: '#3b82f6',
                padding: '0.8rem',
                border: '1px solid #3b82f6',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '0.8rem',
                borderRadius: '6px',
                border: 'none',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Notified
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 30%, #f0f9ff 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        padding: '120px 1rem 4rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '3rem' : '4rem',
          alignItems: 'center'
        }}>
          <div style={{ order: isMobile ? 2 : 1 }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(59, 130, 246, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '30px',
              fontSize: '0.85rem',
              fontWeight: '600',
              color: '#1d4ed8',
              marginBottom: '2rem',
              border: '1px solid rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                background: '#3b82f6',
                borderRadius: '50%'
              }}></div>
              Currently in Development
            </div>
            
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 6vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: '#1f2937',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              The Future of Learning<br />is Being Built
            </h1>
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6',
              textAlign: isMobile ? 'center' : 'left'
            }}>
              We're working on something that could change how students learn and how educators teach. 
              Something intelligent. Something personal. Something revolutionary.
            </p>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              marginBottom: '3rem',
              justifyContent: isMobile ? 'center' : 'flex-start'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Join the Waitlist
              </button>
              <button style={{
                background: 'transparent',
                color: '#3b82f6',
                padding: '1rem 2rem',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Learn More
              </button>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            order: isMobile ? 1 : 2
          }}>
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#1f2937'
            }}>Early Preview</h3>
            
            <div style={{
              background: '#f8fafc',
              borderRadius: '8px',
              padding: '1.5rem',
              marginBottom: '1rem'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
                fontSize: '0.9rem'
              }}>
                <span style={{ fontWeight: '500' }}>Learning Engine</span>
                <span style={{ color: '#10b981', fontWeight: '600' }}>Building...</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '65%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                  borderRadius: '4px',
                  animation: 'pulse 2s ease-in-out infinite'
                }}></div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div style={{
                background: '#fef3c7',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#92400e' }}>?</div>
                <div style={{ fontSize: '0.8rem', color: '#92400e' }}>Something Smart</div>
              </div>
              <div style={{
                background: '#dbeafe',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1d4ed8' }}>∞</div>
                <div style={{ fontSize: '0.8rem', color: '#1d4ed8' }}>Infinite Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{
        padding: '4rem 1rem',
        background: '#ffffff'
      }} id="vision">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              What We're Imagining
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Three different perspectives on the same vision - a world where learning adapts to every individual
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {[
              { id: 'students', label: 'Learners', icon: '🌱' },
              { id: 'teachers', label: 'Educators', icon: '🚀' },
              { id: 'parents', label: 'Families', icon: '💫' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '8px',
                  border: 'none',
                  background: activeTab === tab.id ? 'linear-gradient(135deg, #3b82f6, #1d4ed8)' : '#f8fafc',
                  color: activeTab === tab.id ? 'white' : '#6b7280',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{
            background: '#f8fafc',
            borderRadius: '16px',
            padding: isMobile ? '2rem 1.5rem' : '3rem',
            minHeight: '300px'
          }}>
            {activeTab === 'students' && (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#1f2937'
                }}>
                  Learning That Grows With You
                </h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  color: '#6b7280',
                  lineHeight: '1.8',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Imagine if learning felt like a conversation with the smartest tutor in the world, 
                  one who knows exactly how you learn best, what you need to work on, and how to keep you motivated. 
                  That's the experience we're building.
                </p>
              </div>
            )}

            {activeTab === 'teachers' && (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#1f2937'
                }}>
                  Teaching Elevated by Intelligence
                </h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  color: '#6b7280',
                  lineHeight: '1.8',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  What if you could see exactly what each student needs, when they need it? 
                  We're working on tools that amplify your expertise and intuition, 
                  giving you superpowers to reach every learner in ways never before possible.
                </p>
              </div>
            )}

            {activeTab === 'parents' && (
              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                  fontWeight: '700',
                  marginBottom: '2rem',
                  color: '#1f2937'
                }}>
                  Supporting Your Child's Journey
                </h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                  color: '#6b7280',
                  lineHeight: '1.8',
                  maxWidth: '600px',
                  margin: '0 auto'
                }}>
                  Picture having a clear window into your child's learning journey - 
                  understanding their strengths, celebrating their progress, and knowing exactly how to help them thrive. 
                  That's the transparency and support we're creating.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)'
      }} id="approach">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Our Approach
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              We believe in the power of AI to understand and adapt to individual learning patterns
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🧠',
                title: "Intelligence That Understands",
                description: "We're developing systems that don't just process data, but truly understand how learning happens.",
                hint: "Think adaptive algorithms that learn from patterns..."
              },
              {
                icon: '💡',
                title: "Insights That Matter",
                description: "Every interaction generates meaningful insights, not just numbers and charts.",
                hint: "Imagine knowing why, not just what..."
              },
              {
                icon: '🎯',
                title: "Personalization That Works",
                description: "Technology that adapts to each person's unique way of thinking and learning.",
                hint: "                  No two minds are alike. Neither should be their learning..."
              },
              {
                icon: '🌊',
                title: "Integration That Flows",
                description: "Seamlessly fitting into existing workflows and feeling natural from day one.",
                hint: "Like it was always meant to be there..."
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '2rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  transform: revealedFeatures.includes(index) ? 'translateY(-4px)' : 'translateY(0)'
                }}
                onClick={() => handleFeatureReveal(index)}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  {item.title}
                </h3>
                
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  {item.description}
                </p>

                <div style={{
                  marginTop: '1rem',
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderRadius: '8px',
                  fontStyle: 'italic',
                  color: '#6b7280',
                  fontSize: '0.9rem'
                }}>
                  {item.hint}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <section style={{
        padding: '4rem 1rem',
        background: '#ffffff'
      }} id="progress">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Where We Are Now
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Building something this ambitious takes time. Here's a glimpse into our journey.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div style={{ order: isMobile ? 2 : 1 }}>
              <h3 style={{
                fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1f2937'
              }}>
                Research & Development
              </h3>
              
              <div style={{
                marginBottom: '2rem'
              }}>
                <div style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: '800',
                  color: '#3b82f6',
                  marginBottom: '0.5rem'
                }}>
                  Deep Learning
                </div>
                <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                  Understanding how people learn at the most fundamental level
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: 'clamp(0.9rem, 2vw, 1rem)'
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#10b981',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}></div>
                  <span>Core algorithms in development</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#f59e0b',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}></div>
                  <span>Prototype testing with early partners</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#3b82f6',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}></div>
                  <span>User experience research ongoing</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1f2937, #374151)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white',
              order: isMobile ? 1 : 2
            }}>
              <h4 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                🔬 Development Status
              </h4>
              
              <div style={{
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '1.5rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)'
                }}>
                  <span>Overall Progress</span>
                  <span style={{ color: '#10b981', fontWeight: '600' }}>Building...</span>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <div>
                    <div style={{ color: '#10b981', fontWeight: '600', fontSize: '1.1rem' }}>AI Core</div>
                    <div style={{ opacity: '0.8' }}>In Progress</div>
                  </div>
                  <div>
                    <div style={{ color: '#f59e0b', fontWeight: '600', fontSize: '1.1rem' }}>Testing</div>
                    <div style={{ opacity: '0.8' }}>Active</div>
                  </div>
                  <div>
                    <div style={{ color: '#3b82f6', fontWeight: '600', fontSize: '1.1rem' }}>UI/UX</div>
                    <div style={{ opacity: '0.8' }}>Designing</div>
                  </div>
                  <div>
                    <div style={{ color: '#6b7280', fontWeight: '600', fontSize: '1.1rem' }}>Launch</div>
                    <div style={{ opacity: '0.8' }}>TBD</div>
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9',
                fontStyle: 'italic'
              }}>
                &quot;Great things take time. We're building something that will last.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #1f2937 0%, #374151 100%)',
        color: 'white'
      }} id="contact">
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{
            marginBottom: '3rem'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Be Part of What's Coming
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join us on this journey. Get early access, share your thoughts, and help shape the future of learning.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: '800',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                ∞
              </div>
              <div style={{ opacity: '0.8' }}>Possibilities Ahead</div>
            </div>
      
            <div>
              <div style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                fontWeight: '800',
                color: '#10b981',
                marginBottom: '0.5rem'
              }}>
                ?
              </div>
              <div style={{ opacity: '0.8' }}>Timeline TBD</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '3rem 2rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.2rem, 3vw, 1.5rem)',
              fontWeight: '600',
              marginBottom: '2rem',
              color: 'white'
            }}>
              Want to Stay in the Loop?
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '1rem',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Join the Waitlist
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                border: '2px solid white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                width: isMobile ? '100%' : 'auto'
              }}>
                Follow Updates
              </button>
            </div>

            <div style={{
              fontSize: '0.9rem',
              opacity: '0.8',
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              gap: isMobile ? '0.5rem' : '2rem',
              flexWrap: 'wrap'
            }}>
              <span>✓ Early access when ready</span>
              <span>✓ Development updates</span>
              <span>✓ Beta testing opportunities</span>
              <span>✓ No spam, ever</span>
            </div>
          </div>

          <div style={{
            fontSize: '0.9rem',
            opacity: '0.7'
          }}>
            <p style={{ margin: 0 }}>
              Building the future of education, one breakthrough at a time
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: 'white',
        padding: '3rem 1rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  A
                </div>
                <span style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  fontFamily: 'Playfair Display, serif'
                }}>
                  AcademAI
                </span>
              </div>
              <p style={{
                opacity: '0.8',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Currently in stealth mode, building something extraordinary for the future of learning.
              </p>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Vision
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Learners</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Educators</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Families</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Our Approach</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Connect
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Join Waitlist</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Updates</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Contact</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Partnership</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Legal
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Ethics</a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            fontSize: '0.9rem',
            opacity: '0.7',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <p style={{ margin: 0 }}>
              © 2025 AcademAI. All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
              Building tomorrow's learning, today
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}