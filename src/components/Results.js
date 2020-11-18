import React from "react";
import Card from "components/Card";

export default function Results(props) {
  const { results} = props;
  
  return results.map(cardInfo => {
      return <Card key={cardInfo.collectionId} {...cardInfo} />;
    });
}
