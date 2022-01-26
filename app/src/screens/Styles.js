import { StyleSheet } from "react-native";

const screensStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 16,
  },
  containerDetail: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: "#fdfefe",
    padding: 4,
    paddingTop: 8,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 24,
  },
  padding: {
    padding: 16,
  },
  margin: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    textAlign: "center",
  },
  input2: {
    borderRadius: 8,
    padding: 16,
    fontSize: 20,
    textAlign: "center",
  },
  image: {
    flex: 1,
    borderRadius: 50,
    padding: 30,
    paddingTop: 100,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#A93226",
    marginBottom: 10,
    marginTop: 20,
  },
  text: {
    flexWrap: "wrap",
    fontWeight: "bold",
  },
  breweryText: {
    flexWrap: "wrap",
    fontSize: 22,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  imageDetails: {
    flex: 1,
    height: 150,
    width: 150,
    resizeMode: "contain",
  },
  verticleLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#909090",
  },
  greetings: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 16,
    textAlign: "center",
    margin: 90,
  },
  touchableHighlightView: {
    paddingTop: 18,
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 18,
    borderRadius: 18,
  },
  beerCard1: {
    maxHeight: 250,
    paddingLeft: 16,
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 20,
  },
  beerTextCard: {
    flexWrap: "wrap",
    fontSize: 14,
    paddingLeft: 16,
    paddingTop: 16,
  },
  beerTextCard2: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingTop: 50,
  },
  beerTextCard3: {
    flex: 1,
    maxHeight: 250,
    flexWrap: "wrap",
    fontWeight: "bold",
    fontSize: 16,
    color: "#53a9fa",
    paddingBottom: 30,
    paddingLeft: 16,
  },
  beerDetailsView: {
    flexDirection: "column",
    flex: 1,
    marginTop: 30,
    marginLeft: 16,
  },
  beerDetailsView2: {
    flexDirection: "row",
    marginTop: 50,
    alignItems: "center",
  },
  beerDetailsView3: {
    height: 200,
    width: "100%",
    flex: 1,
    marginBottom: 40,
    marginTop: 30,
  },
  beerDetailsView4: {
    width: "100%",
    alignItems: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  beerDetailsText: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    paddingTop: 50,
  },
  loginStyleCard: {
    padding: 30,
  },
});

export default screensStyles;
