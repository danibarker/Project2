import React from "react";

export default function Comments({
  setShowComments,
  warnings,
  commentCategory,
}) {
  console.log(warnings);
  return (
    <div
      style={{
              position: "absolute",
       overflowY:"auto",
        zIndex: "2",
        backgroundColor: "#002b36",
        width: "60%",
        left: "20%",
        top: "30%",
        height: "40%",
        borderWidth: "3px",
        borderStyle: "solid",
        borderColor: "mauve",
        borderRadius: "8px",
      }}
    >
      <div
        onClick={() => {
          setShowComments(false);
        }}
        style={{
          float: "right",
          margin: "4px 5px",
          width: "max-content",
          position: "relative",
          fontSize: "large",
          color: "white",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        X
      </div>
          <h2 style={{ margin: "10px" }}>Comments on {commentCategory}</h2>
          <div>
      <ul style={{maxHeight: "65%"}}>
        
          {warnings
            .filter((warning) => {
              return warning.category === commentCategory;
            })
            .map((warning) => {
                return <li> {warning.comment}</li>;
            })}
        
              </ul>
              </div>
    </div>
  );
}
