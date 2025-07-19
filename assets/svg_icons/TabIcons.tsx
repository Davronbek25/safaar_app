import React from 'react';
import { Svg, Path, Rect } from 'react-native-svg';

const icons = {
  home: (color: string, size: number) => (
    <Svg width={size} height={(size * 21) / 22} viewBox="0 0 22 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5941 0.993874C11.2485 0.710534 10.7509 0.710539 10.4053 0.993885L0.343025 9.24371C0.0367363 9.49483 -0.0786898 9.91134 0.0546535 10.2843C0.187997 10.6572 0.541336 10.9062 0.937408 10.9062H2.39461L3.13965 19.0484C3.21325 19.8528 3.88786 20.4685 4.69562 20.4685H8.18757C8.53274 20.4685 8.81256 20.1886 8.81256 19.8435V15.0406C8.81256 13.1657 10.3423 13.1657 10.6875 13.1657H11.3125C11.6577 13.1657 13.1875 13.1657 13.1875 15.0406V19.8435C13.1875 20.1886 13.4673 20.4685 13.8125 20.4685H17.3045C18.1123 20.4685 18.7869 19.8528 18.8605 19.0484L19.6055 10.9062H21.0623C21.4584 10.9062 21.8118 10.6572 21.9451 10.2843C22.0784 9.91133 21.963 9.49481 21.6567 9.2437L11.5941 0.993874Z"
        stroke={color}
        strokeWidth={2}
        fill="none"
      />
    </Svg>
  ),
  home_fill: (color: string, size: number) => (
    <Svg width={size} height={(size * 21) / 22} viewBox="0 0 22 21" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5941 0.993874C11.2485 0.710534 10.7509 0.710539 10.4053 0.993885L0.343025 9.24371C0.0367363 9.49483 -0.0786898 9.91134 0.0546535 10.2843C0.187997 10.6572 0.541336 10.9062 0.937408 10.9062H2.39461L3.13965 19.0484C3.21325 19.8528 3.88786 20.4685 4.69562 20.4685H8.18757C8.53274 20.4685 8.81256 20.1886 8.81256 19.8435V15.0406C8.81256 13.1657 10.3423 13.1657 10.6875 13.1657H11.3125C11.6577 13.1657 13.1875 13.1657 13.1875 15.0406V19.8435C13.1875 20.1886 13.4673 20.4685 13.8125 20.4685H17.3045C18.1123 20.4685 18.7869 19.8528 18.8605 19.0484L19.6055 10.9062H21.0623C21.4584 10.9062 21.8118 10.6572 21.9451 10.2843C22.0784 9.91133 21.963 9.49481 21.6567 9.2437L11.5941 0.993874Z"
        fill={color}
      />
    </Svg>
  ),
  discover: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.9375C15.936 19.9375 19.9375 15.936 19.9375 11C19.9375 6.06396 15.936 2.0625 11 2.0625C6.06396 2.0625 2.0625 6.06396 2.0625 11C2.0625 15.936 6.06396 19.9375 11 19.9375ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z"
        fill={color}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0896 13.1212C13.4107 12.927 13.6351 12.6065 13.7078 12.2384L14.9351 6.0176C15.0024 5.67675 14.633 5.41811 14.3357 5.59788L8.90991 8.87887C8.58879 9.07305 8.36436 9.39356 8.29172 9.76172L7.06435 15.9825C6.9971 16.3233 7.36647 16.582 7.66376 16.4022L13.0896 13.1212ZM9.72745 12.8171L11.8026 11.5622L12.272 9.18302L10.1969 10.4379L9.72745 12.8171Z"
        fill={color}
      />
    </Svg>
  ),
  discover_fill: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      fill={color}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19.9375C15.936 19.9375 19.9375 15.936 19.9375 11C19.9375 6.06396 15.936 2.0625 11 2.0625C6.06396 2.0625 2.0625 6.06396 2.0625 11C2.0625 15.936 6.06396 19.9375 11 19.9375ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11Z"
        fill={color} // Use the dynamic color for the outer circle
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0896 13.1212C13.4107 12.927 13.6351 12.6065 13.7078 12.2384L14.9351 6.0176C15.0024 5.67675 14.633 5.41811 14.3357 5.59788L8.90991 8.87887C8.58879 9.07305 8.36436 9.39356 8.29172 9.76172L7.06435 15.9825C6.9971 16.3233 7.36647 16.582 7.66376 16.4022L13.0896 13.1212ZM9.72745 12.8171L11.8026 11.5622L12.272 9.18302L10.1969 10.4379L9.72745 12.8171Z"
        fill={color} // Use the dynamic color for the inner shape
      />
    </Svg>
  ),
  post: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Outer Rectangle */}
      <Rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="none" // Background color of the rectangle
        stroke={color} // Dynamic stroke color
        strokeWidth="2"
      />
      {/* Horizontal Line */}
      <Path
        d="M7 12H17"
        stroke={color} // Dynamic stroke color
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Vertical Line */}
      <Path
        d="M12 7L12 17"
        stroke={color} // Dynamic stroke color
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  ),
  post_fill: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      {/* Outer Rectangle */}
      <Rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="4"
        fill="none" // Background color of the rectangle
        stroke={color} // Dynamic stroke color
        strokeWidth="2"
      />
      {/* Horizontal Line */}
      <Path
        d="M7 12H17"
        stroke="white" // Inner cross line is white to contrast with the filled rectangle
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Vertical Line */}
      <Path
        d="M12 7L12 17"
        stroke="white" // Inner cross line is white to contrast with the filled rectangle
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  ),
  cart: (color: string, size: number) => (
    <Svg
      width={size}
      height={(size * 18) / 24} // Maintain the aspect ratio of 24x18
      viewBox="0 0 24 18"
      fill="none"
    >
      <Path
        d="M22.5617 0C23.2586 0 23.7418 0.694967 23.4991 1.34825C23.3536 1.74005 22.9797 2 22.5617 2H21.7038C21.4812 2 21.2854 2.14715 21.2235 2.36096L18.063 13.2781C17.9392 13.7057 17.5476 14 17.1024 14H5.2799C4.87709 14 4.5136 13.7583 4.35777 13.3869L0.581857 4.38687C0.305384 3.72789 0.78936 3 1.50399 3H15.491C16.1539 3 16.6334 3.63335 16.4535 4.27141C16.3319 4.70236 15.9388 5 15.491 5H3.76001C3.40269 5 3.16071 5.36396 3.29895 5.69345L5.81638 11.6934C5.8943 11.8792 6.07604 12 6.27744 12H15.996C16.2191 12 16.4153 11.8521 16.4767 11.6375L19.5976 0.725024C19.7204 0.295849 20.1127 0 20.5591 0H22.5617ZM8.5 15C7.672 15 7 15.672 7 16.5C7 17.329 7.672 18 8.5 18C9.328 18 10 17.329 10 16.5C10 15.672 9.328 15 8.5 15ZM13.5 15C12.672 15 12 15.671 12 16.5C12 17.329 12.672 18 13.5 18C14.328 18 15 17.329 15 16.5C15 15.672 14.328 15 13.5 15Z"
        fill={color} // Use the dynamic color for the cart
      />
    </Svg>
  ),
  cart_fill: (color: string, size: number) => (
    <Svg
      width={size}
      height={(size * 18) / 24} // Maintain the aspect ratio of 24x18
      viewBox="0 0 24 18"
      fill="none"
    >
      <Path
        d="M22.5617 0C23.2586 0 23.7418 0.694967 23.4991 1.34825C23.3536 1.74005 22.9797 2 22.5617 2H21.7038C21.4812 2 21.2854 2.14715 21.2235 2.36096L18.063 13.2781C17.9392 13.7057 17.5476 14 17.1024 14H5.2799C4.87709 14 4.5136 13.7583 4.35777 13.3869L0.581857 4.38687C0.305384 3.72789 0.78936 3 1.50399 3H15.491C16.1539 3 16.6334 3.63335 16.4535 4.27141C16.3319 4.70236 15.9388 5 15.491 5H3.76001C3.40269 5 3.16071 5.36396 3.29895 5.69345L5.81638 11.6934C5.8943 11.8792 6.07604 12 6.27744 12H15.996C16.2191 12 16.4153 11.8521 16.4767 11.6375L19.5976 0.725024C19.7204 0.295849 20.1127 0 20.5591 0H22.5617ZM8.5 15C7.672 15 7 15.672 7 16.5C7 17.329 7.672 18 8.5 18C9.328 18 10 17.329 10 16.5C10 15.672 9.328 15 8.5 15ZM13.5 15C12.672 15 12 15.671 12 16.5C12 17.329 12.672 18 13.5 18C14.328 18 15 17.329 15 16.5C15 15.672 14.328 15 13.5 15Z"
        fill={color} // Use the dynamic color for the entire cart
      />
    </Svg>
  ),
  profile: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M11.9975 2C14.7648 2 17.0017 4.24 17.0017 7C17.0017 9.76 14.7648 12 11.9975 12C9.23517 12 6.99327 9.76 6.99327 7C6.99327 4.24 9.23517 2 11.9975 2ZM11.9975 4C10.3411 4 8.99496 5.345 8.99496 7C8.99496 8.655 10.3411 10 11.9975 10C13.6589 10 15 8.655 15 7C15 5.345 13.6589 4 11.9975 4ZM11.9975 13.5C17.1468 13.5 20.3345 16.995 20.4997 22C20.5097 22.275 20.2845 22.5 20.0043 22.5H19.0034C18.7282 22.5 18.508 22.275 18.498 22C18.3479 18.08 16.0459 15.5 11.9975 15.5C7.95408 15.5 5.65214 18.08 5.50201 22C5.492 22.275 5.27182 22.5 4.99158 22.5H3.99074C3.7155 22.5 3.49031 22.275 3.50032 22C3.66546 16.995 6.85315 13.5 11.9975 13.5Z"
        fill={color} // Use the dynamic color for the profile icon
      />
    </Svg>
  ),
  profile_fill: (color: string, size: number) => (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M11.9975 2C14.7648 2 17.0017 4.24 17.0017 7C17.0017 9.76 14.7648 12 11.9975 12C9.23517 12 6.99327 9.76 6.99327 7C6.99327 4.24 9.23517 2 11.9975 2ZM11.9975 4C10.3411 4 8.99496 5.345 8.99496 7C8.99496 8.655 10.3411 10 11.9975 10C13.6589 10 15 8.655 15 7C15 5.345 13.6589 4 11.9975 4ZM11.9975 13.5C17.1468 13.5 20.3345 16.995 20.4997 22C20.5097 22.275 20.2845 22.5 20.0043 22.5H19.0034C18.7282 22.5 18.508 22.275 18.498 22C18.3479 18.08 16.0459 15.5 11.9975 15.5C7.95408 15.5 5.65214 18.08 5.50201 22C5.492 22.275 5.27182 22.5 4.99158 22.5H3.99074C3.7155 22.5 3.49031 22.275 3.50032 22C3.66546 16.995 6.85315 13.5 11.9975 13.5Z"
        fill={color} // Use the dynamic color for the filled profile icon
      />
    </Svg>
  ),
};

type IconProps = {
  name: keyof typeof icons; // Restrict 'name' to the keys of the 'icons' object
  color?: string;
  size?: number;
};

const Icon = ({ name, color = 'black', size = 28 }: IconProps) => {
  const IconComponent = icons[name]; // Get the corresponding SVG component
  return IconComponent ? IconComponent(color, size) : null; // Render the SVG or return null if not found
};

export default Icon;