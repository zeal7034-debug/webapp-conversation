import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export interface AppIconProps {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'medium',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'medium' && style[size],
        rounded && style.rounded,
        className ?? '',
      )}
     style={{
  background,
 backgroundImage: "url('https://raw.githubusercontent.com/zeal7034-debug/webapp-conversation/main/app/components/chat/icons/%E6%9C%88%E5%A4%9C%E3%81%AE%E7%B4%AB%E6%99%B6%E5%8D%A0%E3%81%84%E5%B8%AB.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}
    >
 
    </span>
)
}  
export default AppIcon
