import styled from "@emotion/styled"

const iconSizes = {
  small: {
    height: '16px',
    width: '16px'
  },
  medium: {
    height: '32px',
    width: '32px'
  },
  large: {
    height: '64px',
    width: '64px'
  }
}

type TypeIconSizes = typeof iconSizes;

interface IIcon {
  size?: keyof TypeIconSizes
}

const IconSize = styled.div<IIcon>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({size = 'small'}) => iconSizes[size].height};
  width: ${({size = 'small'}) => iconSizes[size].width};

  svg {
    height: ${({size = 'small'}) => iconSizes[size].height};
    fill: ${({theme}) => theme.colors.body};
    transition: fill .25s;
  }
`

export const Sun = ({size}: IIcon) => {
  return (
    <IconSize size={size}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"/>
      </svg>
    </IconSize>
  )
}

export const Moon = ({size}: IIcon) => {
  return (
    <IconSize size={size}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z"/>
      </svg>
    </IconSize> 
  )
}

export const Eye = ({size}: IIcon) => {
  return (
    <IconSize size={size}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"/>
      </svg>
    </IconSize>
  )
}

const CustomIconSize = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 41px;
	animation-duration: .75s;
  animation-name: blink;
	animation-direction: alternate;
  animation-iteration-count: infinite;

	@keyframes blink {
		 0% { opacity: 1; }
		49% { opacity: 1; }
		50% { opacity: 0; }
	 100% { opacity: 0; }
	}

	svg {
		height: 60%;
		width: 32px;
	}
`

export const TextCursor = ({size}: IIcon) => {

  return (
    <CustomIconSize>
      <svg width="256" height="512" viewBox="0 0 256 512" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_211_10)">
				<path d="M29.9884 55.9296L29.9974 55.9304L37.9739 56.6283C75.3205 59.6786 104 90.8475 104 128.3V224V232H96H64C50.7183 232 40 242.718 40 256C40 269.282 50.7183 280 64 280H96H104V288V383.7C104 421.163 75.3113 452.319 37.9799 455.471C37.9774 455.471 37.9749 455.471 37.9723 455.472L29.9974 456.169L29.9659 456.172L29.9344 456.175C16.7591 457.223 6.94554 468.739 8.07145 482.024C9.19979 495.339 20.7413 505.049 33.9143 503.929C33.9164 503.929 33.9185 503.929 33.9207 503.929L41.9027 503.23L41.924 503.229L41.9453 503.227C73.899 500.603 102.113 485.522 122.004 463.004L128 456.216L133.996 463.004C153.89 485.525 182.005 500.603 214.053 503.227L214.075 503.228L214.097 503.23L222.079 503.929C222.081 503.929 222.084 503.929 222.086 503.929C235.279 505.05 246.878 495.226 247.925 482.066C248.981 468.794 239.186 457.218 226.066 456.175L226.034 456.172L226.003 456.169L218.028 455.472C218.025 455.471 218.023 455.471 218.02 455.471C180.689 452.319 152 421.163 152 383.7V288V280H160H192C205.282 280 216 269.282 216 256C216 242.718 205.282 232 192 232H160H152V224V128.3C152 90.8389 180.686 59.6846 218.014 56.5294C218.019 56.529 218.023 56.5286 218.028 56.5282L226.003 55.8303L226.012 55.8296L226.021 55.8288C239.26 54.7004 249.05 43.1352 247.929 29.9793C246.802 16.7603 235.257 6.95158 221.986 8.07041C221.983 8.07072 221.979 8.07102 221.976 8.07133L213.997 8.76945L213.976 8.77131L213.955 8.77307C182.009 11.3962 153.892 26.4718 133.996 48.9962L128 55.7839L122.004 48.9962C102.121 26.4871 74.0044 11.4916 41.9241 8.77129L41.9134 8.77038L41.9027 8.76945L33.9207 8.071C33.9179 8.07076 33.9151 8.07053 33.9123 8.07029C20.761 6.95403 9.20147 16.7407 8.07145 29.9754L29.9884 55.9296ZM29.9884 55.9296L29.9794 55.9288M29.9884 55.9296L29.9794 55.9288M29.9794 55.9288C16.7581 54.802 6.94827 43.2533 8.07112 29.9793L29.9794 55.9288Z" fill="#333333" stroke="white" stroke-width="16"/>
				</g>
				<defs>
				<clipPath id="clip0_211_10">
				<rect width="256" height="512" fill="white"/>
				</clipPath>
				</defs>
			</svg>
    </CustomIconSize>
  )
}

const StyledCursor = styled.div`
	height: 41px;
	width: 20px;
	background: ${({theme}) => theme.colors.body};
	animation-duration: .75s;
  animation-name: blink;
	animation-direction: alternate;
  animation-iteration-count: infinite;

	@keyframes blink {
		 0% { opacity: 1; }
		49% { opacity: 1; }
		50% { opacity: 0; }
	 100% { opacity: 0; }
	}
`

export const Cursor = ({discipline}: {discipline: string}) => {
	if (discipline === 'engineering') {
		return <StyledCursor />
	}

	return <TextCursor />
}