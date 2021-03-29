import "./adminFooter.css"

export default function AdFooter() {
  return (
    <footer
      className="footer-admin"
    >
      <div style={{ textAlign: "center" }}>
        <p>
          &copy; Copyrights <strong>Phuong Ho</strong>. All Rights Reserved
        </p>
        <div className="credits">
          Created with Dashio template by <strong>Mojiy</strong>
        </div>
      </div>
    </footer>
  );
}
