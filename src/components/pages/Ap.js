import React, { useState } from 'react';

// Reusable component for displaying art forms with a clickable effect
const ArtSection = ({ title, imgSrc, imgAlt, description }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      style={{
        flex: '1 1 300px', // This ensures each block takes up the same width, with a min width of 300px
        padding: '15px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s ease', // Instead of widening, we use transform
        transform: isClicked ? 'scale(1.1)' : 'scale(1)', // Slightly enlarge the clicked block
        border: '2px solid #ddd',
        marginBottom: '20px',
        marginRight: '10px',
      }}
      onClick={handleImageClick} // The entire block is clickable
    >
      <h4 style={{ transition: 'font-size 0.3s ease', fontSize: isClicked ? '1.3rem' : '1.1rem' }}>
        {title}
      </h4>
      <img 
        src={imgSrc} 
        alt={imgAlt} 
        style={{ 
          width: '100%', 
          height: 'auto',
          borderRadius: '35px', 
          marginBottom: '10px',
          transition: 'all 0.3s ease',
        }} 
      />
      <p style={{ transition: 'font-size 0.3s ease', fontSize: isClicked ? '1.1rem' : '1rem' }}>
        {description}
      </p>
    </div>
  );
};

const Andhrapradesh = () => (
  <div style={styles.container}>
    <h2>Andhra Pradesh</h2>

    {/* Overview Section */}
    <div style={styles.overviewBox}>
      <p style={{ flex: 1, paddingRight: '20px' }}>
        Andhra Pradesh is a state located in the southeastern part of India, known for its rich cultural heritage, historical significance, and diverse art forms. 
        The state is bordered by Telangana, Tamil Nadu, Karnataka, and Odisha. It has a long coastline along the Bay of Bengal.
      </p>
      <img 
        src="./Ap.jpeg" 
        alt="Andhra Pradesh Location in India" 
        style={styles.stateMap}
      />
    </div>

    {/* Art Section */}
    <div style={styles.artSectionContainer}>
      <h3>Art of Andhra Pradesh</h3>
      <p>
        Andhra Pradesh is famous for various traditional art forms including Kalamkari painting, Lepakshi murals, and the vibrant arts of Kuchipudi dance. These art forms reflect the state’s rich history, mythology, and culture.
      </p>

      <div style={styles.artGrid}>
        {/* Kalamkari Painting */}
        <ArtSection 
          title="Kalamkari Painting"
          imgSrc="/pictures/ap1.jpg"
          imgAlt="Kalamkari Painting"
          description="Kalamkari is a traditional Indian art form involving hand-painting or block printing on fabric. Originating from Machilipatnam, Andhra Pradesh, it depicts mythological stories and religious themes."
        />

        {/* Lepakshi Murals */}
        <ArtSection 
          title="Lepakshi Murals"
          imgSrc="/pictures/ap2.jpeg"
          imgAlt="Lepakshi Murals"
          description="The Lepakshi murals, dating back to the Vijayanagara Empire, showcase intricate designs and narratives of Hindu mythology, located in the famous Lepakshi temple."
        />

        {/* Kuchipudi Dance */}
        <ArtSection 
          title="Kuchipudi Dance"
          imgSrc="/pictures/ap3.jpeg"
          imgAlt="Kuchipudi Dance"
          description="Kuchipudi is one of the classical dance forms of India that originated in Andhra Pradesh. It is known for its graceful movements and dramatic storytelling, often based on Hindu religious themes."
        />
      </div>
    </div>
  </div>
);

const styles = {
  container: {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px'
  },
  overviewBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    border: '2px solid #ddd',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
    borderRadius: '8px'
  },
  stateMap: {
    width: '250px',
    height: 'auto',
    borderRadius: '8px'
  },
  artSectionContainer: {
    padding: '20px',
    border: '2px solid #ddd',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px'
  },
  artGrid: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap'
  }
};

export default Andhrapradesh;
