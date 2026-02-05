import { Grid, Card, CardContent, Typography, Button } from "@mui/material";

const Data = [
  { CardTitle: "History", CardText: "Take a quiz about history and check your knowledge" },
  { CardTitle: "Art", CardText: "Take a quiz about art and check your knowledge" },
  { CardTitle: "Biology", CardText: "Take a quiz about Biology and check your knowledge" },
  { CardTitle: "Chemistry", CardText: "Take a quiz about Chemistry and check your knowledge" },
  { CardTitle: "Defence", CardText: "Take a quiz about Defence and check your knowledge" },
  { CardTitle: "Economy", CardText: "Take a quiz about Economy and check your knowledge" },
  { CardTitle: "Geopolitics", CardText: "Take a quiz about Geopolitics and check your knowledge" },
  { CardTitle: "Literature", CardText: "Take a quiz about literature and check your knowledge" },
  { CardTitle: "Physics", CardText: "Take a quiz about physics and check your knowledge" },
  { CardTitle: "Space", CardText: "Take a quiz about space and check your knowledge" }
];

function Home() {
  return (
    <>
      <Typography variant="h4" align="center" sx={{ mt: 3, mb: 4 }}>
        Quiz App
      </Typography>

      <Grid container spacing={4} px={4} alignItems="stretch">
        {Data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card elevation={6} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.CardTitle}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {item.CardText}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Take Quiz
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
