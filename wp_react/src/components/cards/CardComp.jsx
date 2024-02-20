import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function CardComp({ e, index, articoloSingolo }) {
  
  const navigate = useNavigate();

  return (
    <Col key={index}>
      <Card>
        <Card.Img
          variant="top"
          src={e.jetpack_featured_media_url || "/no-image.png"}
          alt="imm card"
        />
        <Card.Body>
          <Card.Title dangerouslySetInnerHTML={{ __html: e.title.rendered }} />
          <Card.Text dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }} />
          <Button
            onClick={() => {
              localStorage.setItem(
                "singleArticle",
                JSON.stringify(articoloSingolo)
              );
              navigate(`/articolo/${index}`);
            }}
            variant="primary"
          >
            Leggi Articolo
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
