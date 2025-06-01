import React from 'react';

const Leaderboard = () => {
  // Styles object
  const styles = {
    leaderboard: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '600px',
      margin: '20px auto',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      backgroundColor: '#ffffff',
    },
    header: {
      backgroundColor: '#4a6fa5',
      color: 'white',
      padding: '20px',
      textAlign: 'center',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f5f7fa',
      color: '#4a6fa5',
      padding: '12px 15px',
      textAlign: 'left',
      borderBottom: '2px solid #e1e5eb',
    },
    tableRow: {
      borderBottom: '1px solid #e1e5eb',
      transition: 'background-color 0.2s',
      '&:hover': {
        backgroundColor: '#f8f9fa',
      },
      '&:last-child': {
        borderBottom: 'none',
      },
    },
    tableCell: {
      padding: '15px',
      color: '#333',
    },
    rankCell: {
      fontWeight: 'bold',
      color: '#4a6fa5',
      width: '50px',
    },
    avatarCell: {
      width: '50px',
      fontSize: '20px',
    },
    nameCell: {
      fontWeight: '600',
    },
    scoreCell: {
      fontWeight: 'bold',
      color: '#2c3e50',
    },
    progressPositive: {
      color: '#2ecc71',
      fontWeight: 'bold',
    },
    progressNegative: {
      color: '#e74c3c',
      fontWeight: 'bold',
    },
    firstPlace: {
      backgroundColor: 'rgba(255, 215, 0, 0.1)',
    },
    secondPlace: {
      backgroundColor: 'rgba(192, 192, 192, 0.1)',
    },
    thirdPlace: {
      backgroundColor: 'rgba(205, 127, 50, 0.1)',
    },
  };

  // Sample data
  const leaderboardData = [
    { rank: 1, name: 'Rohit Shrestha', score: 9850, avatar: '👑', progress: '+12' },
    { rank: 2, name: 'Manju Kafle', score: 8720, avatar: '🚀', progress: '+8' },
    { rank: 3, name: 'Sita Chaudhary', score: 8450, avatar: '🌟', progress: '-3' },
    { rank: 4, name: 'Bikash roy', score: 8120, avatar: '⚡', progress: '+5' },
    { rank: 5, name: 'Manav sah', score: 7980, avatar: '🏆', progress: '+15' },
    { rank: 6, name: 'Dipesh mandal', score: 7650, avatar: '💎', progress: '+2' },
    { rank: 7, name: 'Prakriti Yadav', score: 7320, avatar: '🔥', progress: '-7' },
  ];

  // Determine row style based on rank
  const getRowStyle = (rank) => {
    if (rank === 1) return { ...styles.tableRow, ...styles.firstPlace };
    if (rank === 2) return { ...styles.tableRow, ...styles.secondPlace };
    if (rank === 3) return { ...styles.tableRow, ...styles.thirdPlace };
    return styles.tableRow;
  };

  // Determine progress style based on value
  const getProgressStyle = (progress) => {
    return progress.startsWith('+') 
      ? styles.progressPositive 
      : styles.progressNegative;
  };

  return (
    <div style={styles.leaderboard}>
      <div style={styles.header}>Leaderboard</div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Rank</th>
            <th style={styles.tableHeader}>Player</th>
            <th style={styles.tableHeader}>Score</th>
            <th style={styles.tableHeader}>Progress</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player) => (
            <tr key={player.rank} style={getRowStyle(player.rank)}>
              <td style={{ ...styles.tableCell, ...styles.rankCell }}>{player.rank}</td>
              <td style={{ ...styles.tableCell, ...styles.nameCell }}>
                <span style={styles.avatarCell}>{player.avatar}</span> {player.name}
              </td>
              <td style={{ ...styles.tableCell, ...styles.scoreCell }}>{player.score.toLocaleString()}</td>
              <td style={{ ...styles.tableCell, ...getProgressStyle(player.progress) }}>
                {player.progress}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;