import React, { useState } from "react";
import Buttons from "./components/buttons";
import FlexContainer from "./components/flexContainer";
import "./home.css";

const Home = () => {
  const [cssCOntainerClass, setCssContainerClass] = useState(
    "flex_direction_column"
  );
  const [cssElementClass, setCssElementClass] = useState("element");
  return (
    <div className="container_flex">
      <div>
        <FlexContainer
          cssClass={cssCOntainerClass}
          elementClass={cssElementClass}
        />
        <button
          onClick={() => {
            setCssContainerClass("flex_direction_column");
            setCssElementClass("element");
          }}
        >
          reset
        </button>
      </div>
      <div>
        <Buttons
          property="flex-direction"
          handleCssClass={setCssContainerClass}
          buttonArray={[
            "flex_direction_column",
            "flex_direction_column_reverse",
            "flex_direction_row",
            "flex_direction_row_reverse",
          ]}
        />
        <Buttons
          property="flex-wrap"
          handleCssClass={setCssContainerClass}
          buttonArray={[
            "flex_wrap_no_wrap",
            "flex_wrap_wrap",
            "flex_wrap_wrap_reverse",
          ]}
        />
        <Buttons
          property="justify-content"
          handleCssClass={setCssContainerClass}
          buttonArray={[
            "flex_justify_content_flex_start",
            "flex_justify_content_flex_end",
            "flex_justify_content_center",
            "flex_justify_content_space_between",
            "flex_justify_content_space_evenly",
            "flex_justify_content_space_around",
          ]}
        />
        <Buttons
          property="align-items"
          handleCssClass={setCssContainerClass}
          buttonArray={[
            "flex_align_items_flex_start",
            "flex_align_items_flex_end",
            "flex_align_items_center",
            "flex_align_items_stretch",
          ]}
        />
        <Buttons
          property="align-content"
          handleCssClass={setCssContainerClass}
          buttonArray={[
            "flex_align_content_flex_start",
            "flex_align_content_flex_end",
            "flex_align_content_center",
            "flex_align_content_space_around",
            "flex_align_content_space_between",
            "flex_align_content_space_evenly",
            "flex_align_content_stretch",
          ]}
        />
        <Buttons
          property="order"
          handleCssClass={setCssElementClass}
          buttonArray={["element_order_first", "element_order_last"]}
        />
        <Buttons
          property="flex-grow"
          handleCssClass={setCssElementClass}
          buttonArray={["element_flex_grow"]}
        />
        <Buttons
          property="flex-shrink"
          handleCssClass={setCssElementClass}
          buttonArray={["element_flex_shrink"]}
        />
        <Buttons
          property="align-self"
          handleCssClass={setCssElementClass}
          buttonArray={[
            "element_align_self_flex_start",
            "element_align_self_flex_end",
            "element_align_self_center",
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
