import "./Button.scss"

type ButtonProps = {
  title: String
  isFilled?: Boolean
}

export const Button = ({ title, isFilled }: ButtonProps) => {
  return <a className={`btn${isFilled ? " btn__filled" : ""}`}>{title}</a>
}
