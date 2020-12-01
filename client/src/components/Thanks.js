import React, { useEffect } from "react";
import "../css/App.css";

export default function Thanks({ setCurrentPage }) {
    useEffect(() => {
        setTimeout(() => {
            setCurrentPage("Navigation");
        }, 2000);
    });
    return <div>Thank you for your contribution</div>;
}
