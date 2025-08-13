"use client"

import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Ici vous pouvez ajouter la logique d'envoi
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #ff6b35 0%, #d63031 100%)",
          color: "white",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Contactez-Nous
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            opacity: 0.9,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Nous sommes là pour vous servir et répondre à toutes vos questions
        </p>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "3rem",
        }}
      >
        {/* Formulaire de contact */}
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "0.5rem",
              color: "#2d3436",
            }}
          >
            Envoyez-nous un message
          </h2>
          <p
            style={{
              color: "#636e72",
              marginBottom: "2rem",
            }}
          >
            Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
          </p>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#2d3436",
                  }}
                >
                  Prénom
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Votre prénom"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                    transition: "border-color 0.3s",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "500",
                    color: "#2d3436",
                  }}
                >
                  Nom
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid #ddd",
                    borderRadius: "8px",
                    fontSize: "1rem",
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Téléphone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01 23 45 67 89"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Sujet
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Réservation, événement privé, etc."
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                }}
              />
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "0.5rem",
                  fontWeight: "500",
                  color: "#2d3436",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre demande en détail..."
                rows="5"
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "2px solid #ddd",
                  borderRadius: "8px",
                  fontSize: "1rem",
                  resize: "vertical",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#ff6b35",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e55a2b")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6b35")}
            >
              Envoyer le message
            </button>
          </form>
        </div>

        {/* Informations du restaurant */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {/* Infos principales */}
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#2d3436",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              📍 Notre Restaurant
            </h2>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>Adresse</h3>
              <p style={{ color: "#636e72", lineHeight: "1.5" }}>
                123 Rue de la Gastronomie
                <br />
                75001 Paris, France
              </p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>📞 Téléphone</h3>
              <p style={{ color: "#636e72" }}>01 42 33 44 55</p>
            </div>

            <div>
              <h3 style={{ fontWeight: "600", marginBottom: "0.5rem" }}>✉️ Email</h3>
              <p style={{ color: "#636e72" }}>contact@restaurant.fr</p>
            </div>
          </div>

          {/* Horaires */}
          <div
            style={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            <h2
              style={{
                fontSize: "1.8rem",
                marginBottom: "1.5rem",
                color: "#2d3436",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              🕒 Horaires d'ouverture
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "500" }}>Lundi - Vendredi</span>
                <span style={{ color: "#636e72" }}>12h00 - 14h30, 19h00 - 22h30</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "500" }}>Samedi</span>
                <span style={{ color: "#636e72" }}>19h00 - 23h00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: "500" }}>Dimanche</span>
                <span style={{ color: "#d63031", fontWeight: "500" }}>Fermé</span>
              </div>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                backgroundColor: "#fff5f0",
                borderRadius: "8px",
                borderLeft: "4px solid #ff6b35",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "#d63031" }}>
                <strong>Réservation recommandée</strong> - Appelez-nous pour garantir votre table
              </p>
            </div>
          </div>

          {/* Boutons d'action */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <button
              style={{
                padding: "1rem",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                transition: "border-color 0.3s",
              }}
            >
              📞<span style={{ fontSize: "0.9rem" }}>Réserver</span>
            </button>
            <button
              style={{
                padding: "1rem",
                backgroundColor: "white",
                border: "2px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                transition: "border-color 0.3s",
              }}
            >
              🗺️
              <span style={{ fontSize: "0.9rem" }}>Itinéraire</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
