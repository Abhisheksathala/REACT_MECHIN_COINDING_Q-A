import React from "react";
import PagesnationTest from "./pages/PagesnationTest";
import Degitalclock from "./pages/degitalclock/Degitalclock";
import CoundowntimerTest from "./pages/coundowntimer/CoundowntimerTest";
import Stepprogressbartest from "./pages/stepprogressbar/Stepprogressbartest";
import RandomQouetgenrater from "./pages/randomQouetgenrater/RandomQouetgenrater";
import Tooltiptest from "./pages/tooltip/Tooltiptest";
import Currencyconvoreter from "./pages/cureencyconvertore/Currencyconvoreter";
import Filter from "./pages/filter/Filter";
import Tipcalculator from "./pages/tipcalculater/Tipcalculator";
import Musicplayer from "./pages/musicplayer/Musicplayer";
import Progressbar from "./pages/progressbar/Progressbar";
import BMICalculator from "./pages/BMIcalculater/BMIcalculater";
import Buttonripple from "./pages/buttonripple/Buttonripple";
import Draganddrop from "./pages/Draganddrop/Draganddrop";
import FormValidation from "./pages/Fromvalidation/Form";
import Fileupload from "./pages/fileupload/Fileupload";
import Quiz from "./pages/quiz/Quiz";
import Neetsedcpmments from "./pages/nestedcomment/Neetsedcpmments";
import PDFviewer from "./pages/PDFviewer/PDFviewer";
import DebouncApiCall from "./pages/DebouncApiCall/DebouncApiCall";
import Sorting from "./pages/Sorting/Sorting";

const App = () => {
  return (
    <div className="overflow-hidden">
      <h1 className="text-5xl">25 react interview projects </h1>
      {/* pages nation */}
      <PagesnationTest />
      {/* clock */}
      <Degitalclock />
      {/* countdime timer */}
      <CoundowntimerTest />
      {/* progressbar */}
      <Stepprogressbartest />
      {/* RandomQouetgenrater */}
      <RandomQouetgenrater />
      {/* Tooltip */}
      <Tooltiptest />
      {/* currency convorter */}
      <Currencyconvoreter />
      {/* card filter */}
      <Filter />
      {/* tip calculator */}
      <Tipcalculator />
      {/* music player */}
      <Musicplayer />
      {/* progress bar */}
      <Progressbar />
      {/* bmi */}
      <BMICalculator />
      {/* Buttonripple */}
      <Buttonripple />
      {/* Draganddrop */}
      <Draganddrop />
      {/* form */}
      <FormValidation />
      {/* file upload functionality */}
      <Fileupload />
      {/* Quiz */}
      <Quiz />
      {/* Neetsedcpmments */}
      <Neetsedcpmments />
      {/* pdf viwer */}
      <PDFviewer />
      {/* DebouncApiCall */}
      <DebouncApiCall />
      {/* Sorting */}
      <Sorting />
    </div>
  );
};

export default App;
