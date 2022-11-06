import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div
      style={{
        color: "#D0D6F9",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        alignSelf: "center",
        bottom: "300px",
        fontFamily: "barlow",
        marginLeft: "300px",
        border: "solid 2px #a8323e",
        padding: "50px",
        borderRadius: "20px",
      }}
    >
      <p>Error 404</p>
      <h1>Sorry, the page can't be found...</h1>

      <Link
        style={{
          textDecoration: "none",
          fontSize: "22px",
          color: "#fff",
          fontFamily: "bellefair",
        }}
        to={"/"}
      >
        Back to Home Page
      </Link>
    </div>
  )
}

export default NotFound
