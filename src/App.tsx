import largeTree from './assets/large_tree.png';
import resinRiver from './assets/image2-2.jpg';
import mediumTree from './assets/image3-2.jpg';
import smallTree from './assets/image6-2.jpg';
import newTree from "./assets/small_tree.webp";

import image0 from './assets/image0.jpg';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image4 from './assets/image4.jpg';
import image5 from './assets/image5.jpg';

import '@fontsource/cormorant-garamond';
import '@fontsource/inter';
import '@fontsource/great-vibes';

import './App.css';

import { useEffect, useState } from 'react';

function App() {
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((index, pieceIndex) => {
          const piece = featuredPieces[pieceIndex];
          return (index + 1) % piece.images.length;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const featuredPieces = [
    {
      title: 'Small Bonsais',
      price: '$20 - $45',
      size: 'Approx. 5-8" tall • 1-3" wide',
      images: [image5, smallTree],
    },
    {
      title: 'Medium  Bonsais',
      price: '$50 - $125',
      size: 'Approx. 12-18" tall • 5-10" wide',
      images: [image4, mediumTree, image1, image0],
    },
    {
      title: 'Large  Bonsais',
      price: '$150-$180+',
      size: 'Approx. 20+ inches tall • 10+ inches wide',
      images: [newTree, image2, largeTree],
    },
  ];

  return (
    <div
      style={{
        background: '#000',
        color: 'white',
        fontFamily: 'Great Vibes, cursive',      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px 20px',
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.95)),
            url(${resinRiver})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div
          style={{
            padding: '10px 24px',
            border: '1px solid #ff7b00',
            borderRadius: '999px',
            marginBottom: '30px',
            color: '#ffb366',
            letterSpacing: '2px',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: '600',
            fontSize: '14px',
          }}
        >
          NOW TAKING CUSTOM COMMISSIONS
        </div>

        <h1
          style={{
            fontSize: 'clamp(58px, 9vw, 120px)',
            lineHeight: '0.95',
            marginBottom: '30px',
            color: '#ffb366',
            fontFamily: "'Great Vibes', cursive",
            textShadow: '0 0 35px rgba(255,140,0,0.35)',
            fontWeight: '400',
          }}
        >
          Custom Copper
          <br />
          Bonsais
        </h1>

        <p
          style={{
            maxWidth: '750px',
            fontSize: '24px',
            fontFamily: "'Cormorant Garamond', serif",
            lineHeight: '1.8',
            color: '#ddd',
            marginBottom: '45px',
          }}
        >
          Handmade wire bonsai trees featuring glowing crystals,
          illuminated geodes, resin rivers, and fully custom designs.
        </p>

        <a
          href="https://instagram.com/custom_copper_trees"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '18px 42px',
            background: '#ff7b00',
            borderRadius: '999px',
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: "'Cormorant Garamond', serif",
            boxShadow: '0 0 30px rgba(255,120,0,0.45)',
            marginBottom: '25px',
          }}
        >
          Message Me
        </a>

        <div
          style={{
            padding: '18px 34px',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '18px',
            color: '#ddd',
            fontSize: '20px',
            fontFamily: "'Cormorant Garamond', serif",
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(5px)',
          }}
        >
          First 5 Orders Receive 15% Off
        </div>
      </section>

      {/* FEATURED */}
      <section
        style={{
          padding: '100px 20px',
          background: '#050505',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '54px',
            color: '#ffb366',
            marginBottom: '70px',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Featured Pieces
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {featuredPieces.map((piece, index) => (
            <div
              key={index}
              style={{
                background: '#0a0a0a',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1px solid rgba(255,140,0,0.12)',
                boxShadow: '0 0 30px rgba(255,120,0,0.08)',
              }}
            >
              <img
                src={piece.images[currentIndexes[index]]}
                alt=""
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                }}
              />

              <div
                style={{
                  padding: '30px',
                  textAlign: 'center',
                }}
              >
                <h3
                style={{
                fontSize: 'clamp(32px, 3vw, 42px)',            
               color: '#fff',
                marginBottom: '14px',
                fontFamily: 'Great Vibes, cursive',
                fontWeight: '400',
              }}
>
                  {piece.title}
                </h3>

                <div
                  style={{
                    color: '#ffb366',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    marginBottom: '14px',
                  }}
                >
                  {piece.price}
                </div>

                <div
                  style={{
                    color: '#999',
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: '0.5px',
                    fontSize: '17px',
                    lineHeight: '1.7',
                  }}
                >
                  {piece.size}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CONTACT */}
      <section
        style={{
          padding: '100px 20px',
          background: '#050505',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '54px',
            color: '#ffb366',
            marginBottom: '24px',
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          Questions or Custom Requests?
        </h2>

        <p
          style={{
            color: '#aaa',
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '0.5px',
            maxWidth: '750px',
            margin: '0 auto 40px',
            lineHeight: '1.8',
            fontSize: '21px',
          }}
        >
          If you have questions about sizing, crystal types, lighting,
          commissions, or fully custom ideas, feel free to reach out directly.
        </p>


        <a
          href="https://instagram.com/custom_copper_trees"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-block',
            padding: '20px 42px',
            background: '#ff7b00',
            borderRadius: '999px',
            color: 'white',
            textDecoration: 'none',
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 'bold',
            fontSize: '20px',
            boxShadow: '0 0 35px rgba(255,120,0,0.45)',
          }}
        >
          Message Me On Instagram
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: 'center',
          padding: '35px 20px',
          color: '#666',
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: '0.5px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: '#000',
        }}
      >
        © 2026 Custom Copper Bonsais
      </footer>
    </div>
  );
}

export default App;
