import { StyledDiary } from "./styled/StyledDiary";

import ImgSec5 from '../images/ImageSection5.png'

export function Diary() {
    return (
        <StyledDiary>
            <span className='divider' />
            <img src={ImgSec5} alt="" />
            <h2>
                Coming soon: Nanny Share Daily Diary!
            </h2>
            <p>
                With the Hapu daily diary your nanny will be able to update
				you and your sharers with photos and commentary of the day.
				You and sharers will receive notifications and you’ll be
				able to login to view the daily adventures fo your little
				ones. We can’t wait!
            </p>
        </StyledDiary>
    )
}