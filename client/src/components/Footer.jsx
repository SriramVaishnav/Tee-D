import { useSnapshot } from "valtio";
import state from "../store";

const Footer = () => {
  const snap = useSnapshot(state);

  const getTextColor = (backgroundColor) => {
    // Convert hex color to RGB
    const hexToRgb = (hex) =>
      hex.match(/[A-Za-z0-9]{2}/g).map((v) => parseInt(v, 16));

    const [r, g, b] = hexToRgb(backgroundColor);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Set text color based on luminance
    return luminance > 0.5 ? "#000000" : "#ffffff"; // Black text for light backgrounds, white text for dark backgrounds
  };

  return (
    <footer
      className="text-center p-4 fixed bottom-0 right-0 z-40 font-normal rounded-full"
      
    >
      Built using three.js by{" "}
      <a href="https://sriramvaishnav.com" target="blank" style={{
        backgroundColor: snap.color,
        color: getTextColor(snap.color),
        borderRadius: 25,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
      }}>
        Sriram Vaishnav
      </a>
    </footer>
  );
};

export default Footer;
