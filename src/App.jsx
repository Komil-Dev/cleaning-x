import { Phone } from "@mui/icons-material";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import image from "./IMAGE.png"; // Replace "your_image.jpg" with your image file
import ResponsiveAppBar from "./header";

// Import your card images
import Footer from "./Footer";
import cardImage1 from "./IMAGE.png";
import cardImage7 from "./imag9.png";
import cardImage8 from "./image10.png";
import cardImage3 from "./image3.png";
import cardImage2 from "./image4.png";
import cardImage4 from "./image5.png";
import cardImage5 from "./image6.png";
import cardImage6 from "./image7.png";

// Card Component
function ServiceCard({ title, description, image, customStyles }) {
  return (
    <Card sx={{ maxWidth: 500, height: "50vh", width: "300px", border: "none", ...customStyles }}>
      <CardMedia component="img" height="70%" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function App() {
  return (
    <Container maxWidth="xl">
      <ResponsiveAppBar />
      <Grid container spacing={2} alignItems="center" justify="center" style={{ minHeight: "90vh", marginLeft: "5%" }}>
        <Grid item maxWidth={"42%"}>
          <Typography variant="h2" fontWeight={600}>
            Quality cleaning <br /> for your home
          </Typography>
          <Typography sx={{ fontSize: "20px" }} variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
            laudantium minus dolorum cumque omnis consectetur? Commodi maxime eveniet
          </Typography>
          <div style={{ marginTop: "5%", display: "flex", alignItems: "center", gap: "20px" }}>
            <Button
              variant="contained"
              style={{
                height: "7vh",
                width: "150px",
                backgroundColor: "#007FFF",
                color: "white",
                borderRadius: "10px",
                border: "none",
                padding: "2px",
                marginBottom: "10px",
              }}
            >
              New Quote
            </Button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "50%",
                  backgroundColor: "white",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone style={{ color: "#007FFF" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                <Typography variant="body1">Call us now</Typography>
                <Typography variant="h6">(414)567-2981</Typography>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item>
          <img src={image} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
        </Grid>
      </Grid>

      <Box sx={{ padding: "5%", textAlign: "center", maxWidth: "xl" }}>
        <Typography variant="h2" fontWeight={600}>
          How our service works?
        </Typography>
        <Typography sx={{ fontSize: "20px", maxWidth: "600px", margin: "0 auto", marginTop: "20px" }} variant="body1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a laudantium
          minus dolorum cumque omnis consectetur? Commodi maxime eveniet
        </Typography>
        <Grid container spacing={6} sx={{ marginTop: "40px", maxWidth: "xl", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Schedule Online"
              description="Commodi maxime eveniet harum quibusdam a laudantium
              minus "
              image={cardImage1}
              customStyles={{}}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Pay online easly"
              description="This is a description for service two."
              image={cardImage2}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Get your house cleaner"
              description="This is a description for service three."
              image={cardImage3}
            />
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5%",
            gap: "20px",
          }}
        >
          <Button
            variant="contained"
            style={{
              height: "7vh",
              width: "150px",
              backgroundColor: "#007FFF",
              color: "white",
              borderRadius: "10px",
              border: "none",
              padding: "2px",
              marginBottom: "10px",
            }}
          >
            New Quote
          </Button>
          <Button
            variant="contained"
            style={{
              height: "7vh",
              width: "150px",
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "10px",
              border: "none",
              padding: "20px",
              marginBottom: "10px",
            }}
          >
            Explore
          </Button>
        </div>
      </Box>

      <Box sx={{ padding: "5%", textAlign: "start", maxWidth: "xl" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" fontWeight={600}>
            Take a look at our <br></br> professional services?
          </Typography>
          <Button
            variant="contained"
            style={{
              height: "7vh",
              width: "150px",
              backgroundColor: "#fff",
              color: "black",
              borderRadius: "10px",
              border: "none",
              padding: "20px",
              marginBottom: "10px",
            }}
          >
            Explore
          </Button>
        </Box>

        <Grid container spacing={6} sx={{ marginTop: "40px", maxWidth: "xl", margin: "0 auto" }}>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="House Cleaaning"
              description="Commodi maxime eveniet harum quibusdam a laudantium
              minus "
              image={cardImage4}
              customStyles={{}}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Office Cleaning"
              description="Commodi maxime eveniet harum quibusdam a laudantium
              minus"
              image={cardImage5}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServiceCard
              title="Industrial Cleaning"
              description="Commodi maxime eveniet harum quibusdam a laudantium
              minus"
              image={cardImage6}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: "#32174D", borderRadius: "20px" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh", marginLeft: "5%" }}
        >
          <Grid item>
            <img src={cardImage7} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
          </Grid>
          <Grid item maxWidth={"46%"} color={"white"}>
            <Typography variant="p">COVID-19 SANITIZATION</Typography>
            <Typography variant="h2" fontWeight={600}>
              We follow guidelines to keep you safe from the COVID-19 virus
            </Typography>
            <Typography sx={{ fontSize: "20px" }} variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
              laudantium minus dolorum cumque omnis consectetur?
            </Typography>
            <div style={{ marginTop: "5%", display: "flex", alignItems: "center", gap: "20px" }}>
              <Button
                variant="contained"
                style={{
                  height: "7vh",
                  width: "150px",
                  backgroundColor: "#007FFF",
                  color: "white",
                  borderRadius: "10px",
                  border: "none",
                  padding: "2px",
                  marginBottom: "10px",
                }}
              >
                New Quote
              </Button>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    borderRadius: "50%",
                    backgroundColor: "white",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone style={{ color: "#007FFF" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "10px" }}>
                  <Typography variant="body1">Call us now</Typography>
                  <Typography variant="h6">(414)567-2981</Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justify="center"
          style={{ minHeight: "90vh", marginLeft: "5%" }}
        >
          <Grid item maxWidth={"42%"}>
            <Typography variant="h2" fontWeight={600}>
              What makes us <br /> different
            </Typography>
            <Typography sx={{ fontSize: "20px" }} variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi maxime eveniet harum quibusdam a
              laudantium minus dolorum cumque omnis consectetur? Commodi maxime eveniet
            </Typography>
            <Typography sx={{ marginBottom: "10%" }} variant="p">
              Commodi maxime eveniet harum quibusdam a laudantium minus dolorum cumque omnis consectetur? Commodi maxime
              eveniet
            </Typography>
            <div
              style={{
                marginTop: "5%",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "20px",
                  fontWeight: 600,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography sx={{ fontWeight: "600px" }} variant="h3">
                    10+
                  </Typography>
                  <span style={{ color: "gray" }}>years</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h3">5k+ </Typography>
                  <span style={{ color: "gray" }}>years</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Typography variant="h3">20k+ </Typography>
                  <span style={{ color: "gray" }}>years</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <Button
                  variant="contained"
                  style={{
                    height: "7vh",
                    width: "150px",
                    backgroundColor: "#007FFF",
                    color: "white",
                    borderRadius: "10px",
                    border: "none",
                    padding: "2px",
                    marginBottom: "10px",
                  }}
                >
                  New Quote
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item>
            <img src={cardImage8} alt="Your Image" style={{ width: "100%", height: "auto", maxHeight: "100%" }} />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Container>
  );
}

export default App;
