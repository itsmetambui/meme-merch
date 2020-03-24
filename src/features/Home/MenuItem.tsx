import React from "react"
import "./MenuItem.scss"

type ItemProps = {
  title: string
  imageUrl: string
  size?: string
  onClick?: () => void
}

const MenuItem: React.FC<ItemProps> = ({
  title,
  imageUrl,
  size,
  onClick,
}: ItemProps) => (
  <div className={`${size} menu-item`} onClick={onClick}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
)

export default MenuItem
