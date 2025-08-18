import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectCard({
  imgPath,
  title,
  description,
  shortDescription,
  technologies = [],
  ghLink,
  demoLink,
  isOngoing,
  category,
  features = []
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const truncatedDescription = description.length > 150 
    ? description.substring(0, 150) + "..." 
    : description;

  const renderTooltip = (text) => (
    <Tooltip id="button-tooltip">
      {text}
    </Tooltip>
  );

  return (
    <Card className="project-card-view h-100 d-flex flex-column">
      {/* Image with category overlay - Fixed height for consistency */}
      <div className="position-relative" style={{ height: '220px', overflow: 'hidden' }}>
        <Card.Img
          variant="top"
          src={imgPath}
          alt={title}
          className="img-fluid h-100 w-100"
          style={{ 
            objectFit: 'cover',
            transition: 'transform 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        />
        
        {/* Category Badge */}
        <Badge 
          bg="primary" 
          className="position-absolute top-0 start-0 m-2"
          style={{ fontSize: '0.75em' }}
        >
          {category}
        </Badge>
        
        {/* Ongoing Badge */}
        {isOngoing && (
          <Badge 
            pill 
            bg="warning" 
            text="dark"
            className="position-absolute top-0 end-0 m-2"
          >
            Ongoing
          </Badge>
        )}
      </div>

      <Card.Body className="d-flex flex-column" style={{ padding: '1.5rem' }}>
        {/* Title Section - Fixed height area */}
        <div style={{ minHeight: '80px' }} className="mb-3 d-flex flex-column justify-content-start">
          <Card.Title 
            className="mb-2" 
            style={{ 
              fontSize: '1.25rem', 
              fontWeight: '600',
              lineHeight: '1.3',
              minHeight: '1.6rem'
            }}
          >
            {title}
          </Card.Title>
          
          {/* Short Description - Reserve space even if empty */}
          <div style={{ minHeight: '2.4rem' }}>
            {shortDescription && (
              <Card.Subtitle 
                className="text-muted" 
                style={{ 
                  fontSize: '0.95rem',
                  lineHeight: '1.4'
                }}
              >
                {shortDescription}
              </Card.Subtitle>
            )}
          </div>
        </div>
        
        {/* Description Section - Fixed height area */}
        <div className="mb-3" style={{ minHeight: '100px' }}>
          <Card.Text 
            style={{ 
              textAlign: "justify", 
              lineHeight: '1.6',
              fontSize: '0.9rem',
              marginBottom: '0.5rem',
              color: '#6c757d'
            }}
          >
            {showFullDescription ? description : truncatedDescription}
          </Card.Text>
          {description.length > 150 && (
            <Button
              variant="link"
              size="sm"
              className="p-0"
              style={{ 
                fontSize: '0.85rem', 
                textDecoration: 'none',
                border: 'none',
                boxShadow: 'none'
              }}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? 'Show Less' : 'Show More'}
            </Button>
          )}
        </div>

        {/* Technologies Section - Fixed height area */}
        <div className="mb-3" style={{ minHeight: '70px' }}>
          <div className="mb-2">
            <small 
              className="text-muted fw-semibold" 
              style={{ 
                fontSize: '0.8rem', 
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              Technologies
            </small>
          </div>
          <div className="d-flex flex-wrap gap-1" style={{ minHeight: '32px' }}>
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                bg="secondary" 
                style={{ 
                  fontSize: '0.7rem',
                  padding: '0.35rem 0.6rem',
                  height: 'fit-content'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features Section - Fixed height area */}
        <div className="mb-4" style={{ minHeight: '90px' }}>
          <div className="mb-2">
            <small 
              className="text-muted fw-semibold" 
              style={{ 
                fontSize: '0.8rem', 
                letterSpacing: '0.5px',
                textTransform: 'uppercase'
              }}
            >
              Key Features
            </small>
          </div>
          {features.length > 0 ? (
            <ul style={{ 
              fontSize: '0.85rem', 
              paddingLeft: '1.2rem', 
              marginBottom: 0,
              lineHeight: '1.5'
            }}>
              {features.slice(0, 3).map((feature, index) => (
                <li 
                  key={index} 
                  className="text-muted mb-1"
                >
                  {feature}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ minHeight: '60px' }}></div>
          )}
        </div>

        {/* Action Buttons - Always at bottom */}
        <div className="mt-auto">
          <div className="d-grid gap-2 d-md-flex">
            {ghLink && (
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("GitHub")}
              >
                <Button 
                  variant="outline-primary" 
                  href={ghLink} 
                  target="_blank"
                  size="sm"
                  className="flex-grow-1"
                  style={{ height: '40px' }}
                >
                  <i className="fab fa-github me-1"></i>
                  Source Code
                </Button>
              </OverlayTrigger>
            )}
            
            {demoLink && (
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip("Voir la démonstration en ligne")}
              >
                <Button 
                  variant="primary" 
                  href={demoLink} 
                  target="_blank"
                  size="sm"
                  className="flex-grow-1"
                  style={{ height: '40px' }}
                >
                  <i className="fas fa-external-link-alt me-1"></i>
                  Démo Live
                </Button>
              </OverlayTrigger>
            )}
            
            {/* Default button if no links */}
            {!ghLink && !demoLink && (
              <Button 
                variant="secondary" 
                disabled
                size="sm"
                className="flex-grow-1"
                style={{ height: '40px' }}
              >
                Private Project
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;