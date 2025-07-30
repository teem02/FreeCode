import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Dashboard.css';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showAIModal, setShowAIModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const sidebarItems = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'inbox', name: 'Inbox', icon: '📥' },
    { id: 'ai-replies', name: 'AI Replies', icon: '🤖' },
    { id: 'insights', name: 'Insights', icon: '📈' },
    { id: 'send-requests', name: 'Send Requests', icon: '📧' },
    { id: 'integrations', name: 'Integrations', icon: '🔗' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const recentReviews = [
    {
      id: 1,
      customerName: 'Sarah Johnson',
      rating: 5,
      platform: 'Google',
      date: '2 hours ago',
      text: 'Absolutely fantastic service! The team went above and beyond to help me. Highly recommend!',
      responded: false,
      sentiment: 'positive'
    },
    {
      id: 2,
      customerName: 'Mike Chen',
      rating: 2,
      platform: 'Google',
      date: '5 hours ago',
      text: 'Service was slow and the staff seemed uninterested. Food was okay but nothing special.',
      responded: false,
      sentiment: 'negative'
    },
    {
      id: 3,
      customerName: 'Lisa Rodriguez',
      rating: 4,
      platform: 'Yelp',
      date: '1 day ago',
      text: 'Good experience overall. Quick service and friendly staff. Will come back again.',
      responded: true,
      sentiment: 'positive'
    },
    {
      id: 4,
      customerName: 'David Park',
      rating: 5,
      platform: 'Facebook',
      date: '2 days ago',
      text: 'Amazing! Best service I\'ve received in years. Thank you for the excellent experience.',
      responded: true,
      sentiment: 'positive'
    }
  ];

  const stats = {
    averageRating: 4.6,
    totalReviews: 247,
    thisMonth: 23,
    responseRate: 98,
    pendingReviews: 3
  };

  const handleAIReply = (review) => {
    setSelectedReview(review);
    setShowAIModal(true);
  };

  const generateAIResponse = () => {
    // Simulate AI response generation
    console.log('Generating AI response for review:', selectedReview);
    setTimeout(() => {
      setShowAIModal(false);
      setSelectedReview(null);
    }, 2000);
  };

  const renderSidebarContent = () => (
    <div className="sidebar-content">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-logo">
          <span className="sidebar-logo-text">LocalR.io</span>
        </Link>
      </div>
      
      <nav className="sidebar-nav">
        {sidebarItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${activeTab === item.id ? 'sidebar-item--active' : ''}`}
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-text">{item.name}</span>
            {item.id === 'inbox' && stats.pendingReviews > 0 && (
              <span className="sidebar-badge">{stats.pendingReviews}</span>
            )}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="user-avatar">JD</div>
          <div className="user-info">
            <span className="user-name">John Doe</span>
            <span className="user-email">john@business.com</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome back! Here's what's happening with your reviews.</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <Card className="stat-card">
          <Card.Body>
            <div className="stat-content">
              <div className="stat-value">{stats.averageRating}⭐</div>
              <div className="stat-label">Average Rating</div>
              <div className="stat-change positive">+0.2 this month</div>
            </div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-content">
              <div className="stat-value">{stats.totalReviews}</div>
              <div className="stat-label">Total Reviews</div>
              <div className="stat-change positive">+{stats.thisMonth} this month</div>
            </div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-content">
              <div className="stat-value">{stats.responseRate}%</div>
              <div className="stat-label">Response Rate</div>
              <div className="stat-change positive">+5% this month</div>
            </div>
          </Card.Body>
        </Card>

        <Card className="stat-card">
          <Card.Body>
            <div className="stat-content">
              <div className="stat-value">{stats.pendingReviews}</div>
              <div className="stat-label">Pending Reviews</div>
              <div className="stat-change">Need response</div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        <Card className="chart-card">
          <Card.Header>
            <h3>Review Volume</h3>
            <p>Reviews received over time</p>
          </Card.Header>
          <Card.Body>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="chart-bar" style={{height: '60%'}}></div>
                <div className="chart-bar" style={{height: '80%'}}></div>
                <div className="chart-bar" style={{height: '45%'}}></div>
                <div className="chart-bar" style={{height: '90%'}}></div>
                <div className="chart-bar" style={{height: '70%'}}></div>
                <div className="chart-bar" style={{height: '85%'}}></div>
                <div className="chart-bar" style={{height: '95%'}}></div>
              </div>
              <div className="chart-labels">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </Card.Body>
        </Card>

        <Card className="chart-card">
          <Card.Header>
            <h3>Sentiment Analysis</h3>
            <p>Review sentiment breakdown</p>
          </Card.Header>
          <Card.Body>
            <div className="sentiment-chart">
              <div className="sentiment-item">
                <div className="sentiment-color positive"></div>
                <span className="sentiment-label">Positive</span>
                <span className="sentiment-percentage">78%</span>
              </div>
              <div className="sentiment-item">
                <div className="sentiment-color neutral"></div>
                <span className="sentiment-label">Neutral</span>
                <span className="sentiment-percentage">15%</span>
              </div>
              <div className="sentiment-item">
                <div className="sentiment-color negative"></div>
                <span className="sentiment-label">Negative</span>
                <span className="sentiment-percentage">7%</span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="quick-actions-card">
        <Card.Header>
          <h3>Quick Actions</h3>
        </Card.Header>
        <Card.Body>
          <div className="quick-actions">
            <Button 
              variant="primary" 
              onClick={() => setShowRequestModal(true)}
            >
              📧 Request Reviews
            </Button>
            <Button 
              variant="outline"
              onClick={() => setActiveTab('integrations')}
            >
              🔗 Connect Google
            </Button>
            <Button 
              variant="outline"
              onClick={() => setActiveTab('ai-replies')}
            >
              🤖 Manage AI Responses
            </Button>
            <Link to="/pricing">
              <Button variant="accent">
                ⭐ Upgrade Plan
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

  const renderInbox = () => (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Review Inbox</h1>
        <p>Manage and respond to your customer reviews</p>
      </div>

      <div className="inbox-filters">
        <Button variant="primary" size="sm">All Reviews</Button>
        <Button variant="ghost" size="sm">Needs Response</Button>
        <Button variant="ghost" size="sm">Responded</Button>
        <Button variant="ghost" size="sm">Positive</Button>
        <Button variant="ghost" size="sm">Negative</Button>
      </div>

      <div className="reviews-list">
        {recentReviews.map((review) => (
          <Card key={review.id} className="review-card">
            <Card.Body>
              <div className="review-header">
                <div className="review-customer">
                  <div className="customer-avatar">
                    {review.customerName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="customer-info">
                    <span className="customer-name">{review.customerName}</span>
                    <span className="review-platform">{review.platform} • {review.date}</span>
                  </div>
                </div>
                <div className="review-rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="review-content">
                <p>"{review.text}"</p>
              </div>

              <div className="review-actions">
                <div className="review-status">
                  {review.responded ? (
                    <span className="status-badge responded">Responded</span>
                  ) : (
                    <span className="status-badge pending">Needs Response</span>
                  )}
                  <span className={`sentiment-badge ${review.sentiment}`}>
                    {review.sentiment}
                  </span>
                </div>
                
                {!review.responded && (
                  <div className="action-buttons">
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => handleAIReply(review)}
                    >
                      🤖 Respond with AI
                    </Button>
                    <Button variant="outline" size="sm">
                      ✏️ Custom Reply
                    </Button>
                  </div>
                )}
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'inbox':
        return renderInbox();
      case 'ai-replies':
        return (
          <div className="dashboard-content">
            <h1>AI Replies Management</h1>
            <p>Configure and manage your AI response settings</p>
          </div>
        );
      case 'insights':
        return (
          <div className="dashboard-content">
            <h1>Business Insights</h1>
            <p>Advanced analytics and competitor insights</p>
          </div>
        );
      case 'send-requests':
        return (
          <div className="dashboard-content">
            <h1>Send Review Requests</h1>
            <p>Send targeted review requests to your customers</p>
          </div>
        );
      case 'integrations':
        return (
          <div className="dashboard-content">
            <h1>Integrations</h1>
            <p>Connect your business platforms and tools</p>
          </div>
        );
      case 'settings':
        return (
          <div className="dashboard-content">
            <h1>Account Settings</h1>
            <p>Manage your account preferences and business information</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="dashboard">
      {/* Mobile Menu Button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className={`hamburger ${sidebarOpen ? 'hamburger--open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}>
        {renderSidebarContent()}
      </aside>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* AI Reply Modal */}
      {showAIModal && selectedReview && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>AI Response Generator</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAIModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="original-review">
                <h4>Original Review</h4>
                <div className="review-content">
                  <div className="review-rating">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < selectedReview.rating ? 'star filled' : 'star'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p>"{selectedReview.text}"</p>
                  <span className="review-author">- {selectedReview.customerName}</span>
                </div>
              </div>
              
              <div className="ai-response">
                <h4>Generated Response</h4>
                <div className="response-content">
                  <div className="loading-dots">
                    <span>Generating response</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                  <textarea 
                    className="response-textarea"
                    placeholder="AI-generated response will appear here..."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Button variant="outline" onClick={() => setShowAIModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={generateAIResponse}>
                Generate Response
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Review Request Modal */}
      {showRequestModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h3>Send Review Request</h3>
              <button 
                className="modal-close"
                onClick={() => setShowRequestModal(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <p>Send personalized review requests to your customers</p>
              <Button variant="primary" className="btn--full">
                Create Review Request Campaign
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;