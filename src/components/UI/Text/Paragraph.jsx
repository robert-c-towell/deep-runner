import RevealText from "./RevealText";

const Paragraph = (props) => {
  const sentences = props.children.split(/(?<=[?.!;])/);

  return <>
    {sentences.map((s, i) =>
      <p key={i}>
        <RevealText onFinish={props.onFinish} useInterval={!props.finished}>
          {s}
        </RevealText>
      </p>
    )}
  </>
}

export default Paragraph;