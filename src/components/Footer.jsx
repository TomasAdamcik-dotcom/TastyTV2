import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} TastyTV. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
