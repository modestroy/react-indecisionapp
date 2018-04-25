import React from "react";
import Option from "./Option";

export default props => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Add some options to start play</p>}
        {props.options.map((optionText, index) => (
            <Option
                key={optionText}
                option={optionText}
                count={index+1}
                handleDeleteOption={props.handleDeleteOption}
            />
        ))}
    </div>
);
