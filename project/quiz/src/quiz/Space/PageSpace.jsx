import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Data = [
  {
    CardTitle: "Space (Easy)",
    CardText: "Take a quiz about Space and check your knowledge",
    path: "/Space/EasySpace",
  },
  {
    CardTitle: "Space (Medium)",
    CardText: "Take a quiz about Space and check your knowledge",
    path: "/Space/MedSpace",
  },
  {
    CardTitle: "Space (Hard)",
    CardText: "Take a quiz about Space and check your knowledge",
    path: "/Space/HardSpace",
  },
];

function PageSpace() {
  const navigate = useNavigate();

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
                  onClick={() => navigate(item.path)}
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

export default PageSpace;
