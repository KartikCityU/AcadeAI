'use client';

import { useState } from 'react';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('students');
  const [revealedFeatures, setRevealedFeatures] = useState<number[]>([]);
  
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
          padding: '1.5rem 2rem',
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
              fontSize: '1.6rem',
              fontWeight: '700',
              color: '#1f2937',
              fontFamily: 'Playfair Display, serif'
            }}>AcademAI</span>
          </div>
          
          <ul style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            <li><a href="#features" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Features</a></li>
            <li><a href="#solutions" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Solutions</a></li>
            <li><a href="#analytics" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Analytics</a></li>
            <li><a href="#contact" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '0.95rem' }}>Contact</a></li>
          </ul>
          
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
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
              Sign In
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
              Start Free Trial
            </button>
          </div>
        </nav>
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
        paddingTop: '100px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
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
              AI-Powered Learning Platform
            </div>
            
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              color: '#1f2937'
            }}>
              Personalized AI Tutoring<br />for Every Student
            </h1>
            
            <p style={{
              fontSize: '1.2rem',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Transform your school&apos;s academic performance with AI-driven personalized learning, 
              comprehensive analytics, and adaptive tutoring that understands each student&apos;s unique learning journey.
            </p>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <button style={{
                background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: 'none',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                Schedule Demo
              </button>
              <button style={{
                background: 'transparent',
                color: '#3b82f6',
                padding: '1rem 2rem',
                border: '2px solid #3b82f6',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1rem',
                cursor: 'pointer'
              }}>
                Free Trial
              </button>
            </div>

            <div style={{
              display: 'flex',
              gap: '2rem',
              fontSize: '0.9rem',
              color: '#6b7280'
            }}>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, #ffffff, #f8fafc)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.1)',
            border: '1px solid rgba(59, 130, 246, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: '#1f2937'
            }}>Live Student Dashboard</h3>
            
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
                marginBottom: '1rem'
              }}>
                <span style={{ fontWeight: '500' }}>Math Progress</span>
                <span style={{ color: '#10b981', fontWeight: '600' }}>+15% this week</span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '78%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                  borderRadius: '4px'
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
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#92400e' }}>12</div>
                <div style={{ fontSize: '0.8rem', color: '#92400e' }}>Topics Mastered</div>
              </div>
              <div style={{
                background: '#dbeafe',
                padding: '1rem',
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1d4ed8' }}>94%</div>
                <div style={{ fontSize: '0.8rem', color: '#1d4ed8' }}>Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Tabs */}
      <section style={{
        padding: '6rem 2rem',
        background: '#ffffff'
      }} id="solutions">
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
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Solutions for Everyone in Education
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Tailored experiences that address the unique needs of students, teachers, and parents
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem'
          }}>
            {[
              { id: 'students', label: 'For Students', icon: '🎓' },
              { id: 'teachers', label: 'For Teachers', icon: '👩‍🏫' },
              { id: 'parents', label: 'For Parents', icon: '👨‍👩‍👧' }
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
                  gap: '0.5rem'
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
            padding: '3rem',
            minHeight: '400px'
          }}>
            {activeTab === 'students' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#1f2937'
                  }}>
                    Your Personal AI Tutor
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.1rem',
                    lineHeight: '2'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></div>
                      Practice problems adapted to your learning style
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></div>
                      Instant feedback and step-by-step solutions
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></div>
                      Track your progress across all subjects
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%' }}></div>
                      Focus areas identified by AI analysis
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1f2937' }}>📊 Today&apos;s Learning Plan</h4>
                  <div style={{ fontSize: '0.9rem', color: '#6b7280', lineHeight: '1.6' }}>
                    <div style={{ marginBottom: '0.8rem', padding: '0.5rem', background: '#fef3c7', borderRadius: '4px' }}>
                      📐 Geometry: Triangle Properties (20 min)
                    </div>
                    <div style={{ marginBottom: '0.8rem', padding: '0.5rem', background: '#dbeafe', borderRadius: '4px' }}>
                      🧮 Algebra: Quadratic Equations (15 min)
                    </div>
                    <div style={{ marginBottom: '0.8rem', padding: '0.5rem', background: '#dcfce7', borderRadius: '4px' }}>
                      📖 Review: Areas you struggled with
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'teachers' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#1f2937'
                  }}>
                    Comprehensive Class Analytics
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.1rem',
                    lineHeight: '2'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%' }}></div>
                      Real-time performance analytics for every student
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%' }}></div>
                      Identify struggling students before they fall behind
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%' }}></div>
                      Automated progress reports and insights
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#3b82f6', borderRadius: '50%' }}></div>
                      Curriculum alignment and gap analysis
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1f2937' }}>📈 Class Overview</h4>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Class Average</span>
                      <span style={{ fontWeight: '600', color: '#10b981' }}>87.5%</span>
                    </div>
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: '#e5e7eb',
                      borderRadius: '3px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: '87.5%',
                        height: '100%',
                        background: 'linear-gradient(90deg, #10b981, #059669)'
                      }}></div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.9rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>📊 Students on track:</span>
                      <span style={{ fontWeight: '600', color: '#10b981' }}>23/28</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span>⚠️ Need attention:</span>
                      <span style={{ fontWeight: '600', color: '#f59e0b' }}>3/28</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>🎯 Struggling:</span>
                      <span style={{ fontWeight: '600', color: '#ef4444' }}>2/28</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'parents' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '700',
                    marginBottom: '1.5rem',
                    color: '#1f2937'
                  }}>
                    Stay Connected to Your Child&apos;s Learning
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    fontSize: '1.1rem',
                    lineHeight: '2'
                  }}>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#8b5cf6', borderRadius: '50%' }}></div>
                      Weekly progress reports delivered to your inbox
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#8b5cf6', borderRadius: '50%' }}></div>
                      Understand exactly where your child excels and struggles
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#8b5cf6', borderRadius: '50%' }}></div>
                      Suggested activities to support learning at home
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <div style={{ width: '6px', height: '6px', background: '#8b5cf6', borderRadius: '50%' }}></div>
                      Direct communication with teachers when needed
                    </li>
                  </ul>
                </div>
                <div style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                }}>
                  <h4 style={{ marginBottom: '1rem', color: '#1f2937' }}>📱 Parent Dashboard</h4>
                  <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                    <div style={{
                      background: '#f0fdf4',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      border: '1px solid #bbf7d0'
                    }}>
                      <div style={{ fontWeight: '600', color: '#15803d', marginBottom: '0.5rem' }}>
                        🎉 Great Progress This Week!
                      </div>
                      <div style={{ color: '#166534' }}>
                        Sarah completed 15 practice problems and improved her algebra score by 12%.
                      </div>
                    </div>
                    <div style={{
                      background: '#fef3c7',
                      padding: '1rem',
                      borderRadius: '8px',
                      border: '1px solid #fde68a'
                    }}>
                      <div style={{ fontWeight: '600', color: '#92400e', marginBottom: '0.5rem' }}>
                        💡 Suggestion for Tonight
                      </div>
                      <div style={{ color: '#92400e' }}>
                        Review multiplication tables 6-8 for 10 minutes before tomorrow&apos;s quiz.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)'
      }} id="features">
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
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Powered by Advanced AI Technology
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Our AI engine analyzes learning patterns, identifies knowledge gaps, and creates personalized learning paths for optimal academic growth.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🧠',
                title: "Adaptive Learning Engine",
                description: "AI analyzes student responses in real-time, adjusting difficulty and content type based on individual learning patterns and comprehension speed.",
                details: "Advanced machine learning algorithms track over 50 learning indicators to create truly personalized educational experiences."
              },
              {
                icon: '📊',
                title: "Performance Analytics Dashboard",
                description: "Comprehensive analytics that track student progress, identify learning gaps, and provide actionable insights for teachers and parents.",
                details: "Real-time data visualization helps educators make informed decisions about curriculum pacing and individual student support."
              },
              {
                icon: '🎯',
                title: "Intelligent Content Delivery",
                description: "Smart content recommendation system that delivers the right practice problems and explanations at exactly the right moment in a student&apos;s learning journey.",
                details: "Our content engine understands prerequisite knowledge and learning dependencies to optimize skill building progression."
              },
              {
                icon: '🔄',
                title: "Continuous Assessment Integration",
                description: "Seamless integration with existing school assessment systems, providing ongoing evaluation without disrupting classroom flow.",
                details: "Compatible with major SIS platforms and standardized testing frameworks for comprehensive academic tracking."
              }
            ].map((feature, index) => (
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
                  transform: revealedFeatures.includes(index) ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadowHover: '0 8px 25px rgba(59, 130, 246, 0.15)'
                }}
                onClick={() => handleFeatureReveal(index)}
              >
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {feature.icon}
                </div>
                
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  marginBottom: '1rem',
                  color: '#1f2937'
                }}>
                  {feature.title}
                </h3>
                
                <p style={{
                  color: '#6b7280',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  {feature.description}
                </p>

                {revealedFeatures.includes(index) && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1rem',
                    background: '#f8fafc',
                    borderRadius: '8px',
                    borderLeft: '3px solid #3b82f6'
                  }}>
                    <p style={{
                      color: '#374151',
                      fontSize: '0.9rem',
                      fontStyle: 'italic',
                      margin: 0
                    }}>
                      {feature.details}
                    </p>
                  </div>
                )}

                <div style={{
                  marginTop: '1rem',
                  color: '#3b82f6',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {revealedFeatures.includes(index) ? '▼ Hide Details' : '▶ Learn More'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Section */}
      <section style={{
        padding: '6rem 2rem',
        background: '#ffffff'
      }} id="analytics">
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
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: '#1f2937'
            }}>
              Remove the Analytics Hassle
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6b7280',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Say goodbye to manual tracking and spreadsheets. Our platform automatically generates comprehensive reports and insights, saving teachers hours every week.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1f2937'
              }}>
                Automated Insights, Not Manual Work
              </h3>
              
              <div style={{
                display: 'flex',
                gap: '3rem',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#ef4444',
                    marginBottom: '0.5rem'
                  }}>
                    15hrs
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                    Weekly time spent<br />on manual tracking
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#ef4444',
                    marginTop: '0.5rem',
                    fontWeight: '600'
                  }}>
                    WITHOUT AcademAI
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '2rem',
                  color: '#6b7280'
                }}>
                  →
                </div>
                
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: '#10b981',
                    marginBottom: '0.5rem'
                  }}>
                    30min
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>
                    Weekly time spent<br />reviewing insights
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#10b981',
                    marginTop: '0.5rem',
                    fontWeight: '600'
                  }}>
                    WITH AcademAI
                  </div>
                </div>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '1rem'
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f0fdf4',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#10b981',
                    borderRadius: '50%'
                  }}></div>
                  <span><strong>Automated Progress Reports:</strong> Generated weekly for every student</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f0fdf4',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#10b981',
                    borderRadius: '50%'
                  }}></div>
                  <span><strong>Early Warning System:</strong> Alerts when students need intervention</span>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                  padding: '0.75rem',
                  background: '#f0fdf4',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    background: '#10b981',
                    borderRadius: '50%'
                  }}></div>
                  <span><strong>Parent Communication:</strong> Automatic updates to keep families informed</span>
                </li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #1f2937, #374151)',
              borderRadius: '16px',
              padding: '2rem',
              color: 'white'
            }}>
              <h4 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                📈 Weekly Analytics Summary
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
                  marginBottom: '1rem'
                }}>
                  <span>Class Performance Trend</span>
                  <span style={{ color: '#10b981', fontWeight: '600' }}>↗ +8.5%</span>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <div>
                    <div style={{ color: '#10b981', fontWeight: '600', fontSize: '1.1rem' }}>23</div>
                    <div style={{ opacity: '0.8' }}>Students Excelling</div>
                  </div>
                  <div>
                    <div style={{ color: '#f59e0b', fontWeight: '600', fontSize: '1.1rem' }}>3</div>
                    <div style={{ opacity: '0.8' }}>Need Support</div>
                  </div>
                  <div>
                    <div style={{ color: '#ef4444', fontWeight: '600', fontSize: '1.1rem' }}>2</div>
                    <div style={{ opacity: '0.8' }}>At Risk</div>
                  </div>
                  <div>
                    <div style={{ color: '#3b82f6', fontWeight: '600', fontSize: '1.1rem' }}>187</div>
                    <div style={{ opacity: '0.8' }}>Hours Saved</div>
                  </div>
                </div>
              </div>

              <div style={{
                fontSize: '0.9rem',
                opacity: '0.9',
                fontStyle: 'italic'
              }}>
                &quot;This report automatically includes actionable recommendations for each student and suggested interventions for struggling learners.&quot;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section style={{
        padding: '6rem 2rem',
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
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Join 500+ Schools Already Transforming Education
            </h2>
            <p style={{
              fontSize: '1.2rem',
              opacity: '0.9',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              See why educators choose AcademAI to enhance student performance and reduce administrative burden.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#3b82f6',
                marginBottom: '0.5rem'
              }}>
                95%
              </div>
              <div style={{ opacity: '0.8' }}>Improvement in Student Performance</div>
            </div>
      
            <div>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '800',
                color: '#ef4444',
                marginBottom: '0.5rem'
              }}>
                15hrs
              </div>
              <div style={{ opacity: '0.8' }}>Saved Per Teacher Weekly</div>
            </div>
          </div>

          <div style={{
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '3rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '2rem',
              color: 'white'
            }}>
              Ready to Transform Your School&apos;s Academic Performance?
            </h3>
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
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
                cursor: 'pointer'
              }}>
                Schedule a Demo
              </button>
              <button style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                border: '2px solid white',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer'
              }}>
                Start Free Trial
              </button>
            </div>

            <div style={{
              fontSize: '0.9rem',
              opacity: '0.8',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <span>✓ 30-day free trial</span>
              <span>✓ No setup fees</span>
              <span>✓ Full teacher training included</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          <div style={{
            fontSize: '0.9rem',
            opacity: '0.7'
          }}>
            <p style={{ margin: 0 }}>
              Trusted by educational institutions worldwide • SOC 2 Type II Certified • FERPA Compliant
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: 'white',
        padding: '3rem 2rem 2rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
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
                Empowering schools with AI-driven personalized learning and comprehensive analytics to enhance student performance.
              </p>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Solutions
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Students</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Teachers</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Parents</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>For Schools</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Resources
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Documentation</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Case Studies</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Help Center</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>API Reference</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 style={{
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                Company
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '0.9rem'
              }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>About Us</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Careers</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Privacy Policy</a>
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.9rem',
            opacity: '0.7'
          }}>
            <p style={{ margin: 0 }}>
              © 2025 AcademAI. All rights reserved.
            </p>
            <p style={{ margin: 0 }}>
              Transforming education through AI innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}