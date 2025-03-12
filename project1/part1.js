import "@tensorflow/tfjs";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { handleFilePicker } from "./utils";

let model;

const init = async () => {
    model = await cocoSsd.load();
    handleFilePicker();
};

const predict = async (img) => {
    const predictions = await model.detect(img);
    console.log(redictions);
    showResult(predictions);
};

init();