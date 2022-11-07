const Loading = () => {
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
        bottom: "150px",
        left: "80px",
        fontFamily: "barlow",
        marginLeft: "500px",
        border: "solid 3px #cbf5f2",
        padding: "50px",
        borderRadius: "20px",
        fontSize: "22px",
      }}
    >
      <p
        style={{
          fontSize: "29px",
          paddingLeft: "59px",
          paddingRight: "59px",
          paddingTop: "0px",
          paddingBottom: "0px",
        }}
      >
        Loading...
      </p>
    </div>
  )
}

export default Loading
