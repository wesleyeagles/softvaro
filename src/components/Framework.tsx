import { Link } from "react-router-dom";
import { StyledFramework } from "./styled/StyledFramework";

export function Framework() {
    return (
        <StyledFramework>
            <h2>
                A framework built for the long term
            </h2>

            <p>
                Childcare is for the long term. And you need a framework
				you can count on that gives your share long term
				viability and success. That’s why we’ve defined Hapu
				around our three tribal principles; clearly defined
				process, transparency over money and equality of
				participation.
            </p>

            <Link className="framework__link" to='/bridget'>
				<span>
					Read how Hapu’s tribal background defines our app
				</span>
			</Link>


        </StyledFramework>
    )
}