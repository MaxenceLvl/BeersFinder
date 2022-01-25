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
    borderRadius: 14,
    backgroundColor: "#ffffff",
    padding: 4,
    paddingTop: 8,
    paddingLeft: 23,
    //backgroundImage: url("https://api.lorem.space/image/face?w=150&h=150"),
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
  },
  image: {
    flex: 1,
    flexShrink: 100,
    width: 200,
    height: 200,
    paddingLeft: 12,
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
  backgroundImage: {
    width: 320,
    height: 480,
    resizeMode: "cover",
  },
});

export default screensStyles;
