import React from 'react'

const Footer = () => {
    return (
        <>
            <footer style={{
                textAlign: 'center',
                padding: '20px',
                color: '#555',
                marginTop: '25px'
            }}>
                <p style={{ marginBottom: '7px', fontSize: '12.5px' }}>© 2025 Waleed Khattak ✨ All rights reserved.</p>
                <p>
                    🌐
                    <a href="https://www.linkedin.com/in/waleed-khattak/" target="_blank" rel="noopener noreferrer" style={{ color: '#0e76a8', textDecoration: 'none', margin: '0 8px' }}>
                        LinkedIn
                    </a> |{' '}
                    <a href="https://github.com/waleed-khattak" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', margin: '0 8px' }}>
                        💻 GitHub
                    </a> |{' '}
                    <a href="mailto:khattak4422004@gmail.com" style={{ color: '#c23a2b', textDecoration: 'none', margin: '0 8px' }}>
                        📧 Email
                    </a>
                </p>
            </footer>
        </>
    )
}

export default Footer