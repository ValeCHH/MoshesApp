import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export default function Footer() {
    const token = "1750418914:AAGvauViE8H7CT7heYWqjDS00000000";
  const chat_id = -1001400000000;
  const message = "Hello from my web page";
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id${chat_id}text=${message}&parse_mode=html`;
  return (
    <div>
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          <a
            href="https://wa.me/972527026254?text=I%B4m%20interested%20in%20your%20web%20page%20products"
            style={{ textDecoration: "none" }}
          >
            {" "}
            <WhatsAppIcon />
          </a>
          <a href="${url}" style={{ textDecoration: "none" }}>
            {" "}
            <TelegramIcon />
          </a>
        </Typography>
      </Box>
    </div>
  );
}
