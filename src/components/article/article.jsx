import React from 'react';

const Article = () => {
    return (
        <section className="press-feature" style={{ padding: "40px 20px", background: "#f9f9f9" }}>
            <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
                <h2 style={{ marginBottom: "20px" }}>📣 Featured In the Media</h2>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img
                        src="https://socalnewspaper.com/wp-content/uploads/2026/01/1000230134-1-860x536.webp"
                        alt="Katsin Dining Article"
                        style={{ maxWidth: "100%", borderRadius: "10px", marginBottom: "20px" }}
                    />

                    <h3 style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                        Katsin Glendale Redefining Fine Dining in Southern California
                    </h3>

                    <p style={{ maxWidth: "800px", margin: "15px 0" }}>
                        We’re proud to be featured in SoCal Newspaper for our innovative interior and modern Armenian cuisine.
                        Learn why Katsin is being recognized as one of Southern California’s most exciting dining destinations.
                    </p>

                    <a
                        href="https://socalnewspaper.com/katsin-glendale-redefining-fine-dining-in-southern-california/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: "inline-block",
                            padding: "10px 20px",
                            backgroundColor: "#000",
                            color: "#fff",
                            borderRadius: "5px",
                            textDecoration: "none",
                            fontWeight: "bold"
                        }}
                    >
                        Read Full Article →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Article;