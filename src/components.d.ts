/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ApexChartHeight, ApexChartStacked, ApexChartStackType, ApexChartToolbar, ApexChartType, ApexChartWidth, ApexOptionsSeries } from "./components/apex-chart";
import { ApexOptions } from "apexcharts";
export namespace Components {
    interface ApexChart {
        /**
          * (optional) Height
          * @see https ://apexcharts.com/docs/options/chart/height/
         */
        "height"?: ApexChartHeight;
        /**
          * (optional) Options
          * @see https ://apexcharts.com/docs/options/
         */
        "options"?: ApexOptions;
        /**
          * (optional) Series
          * @see https ://apexcharts.com/docs/options/series/
         */
        "series"?: ApexOptionsSeries;
        /**
          * (optional) StackType
          * @see https ://apexcharts.com/docs/options/chart/stackType/
         */
        "stackType"?: ApexChartStackType;
        /**
          * (optional) Stacked
          * @see https ://apexcharts.com/docs/options/chart/stacked/
         */
        "stacked"?: ApexChartStacked;
        /**
          * (optional) Toolbar
          * @see https ://apexcharts.com/docs/options/chart/toolbar/
         */
        "toolbar"?: ApexChartToolbar;
        /**
          * (optional) Type
          * @see https ://apexcharts.com/docs/options/chart/type/
         */
        "type"?: ApexChartType;
        /**
          * Updates the configuration object. The new config object is merged with the existing config object preserving the existing configuration.
          * @param newOptions The configuration object to merge on the existing one
          * @param redrawPaths When the chart is re-rendered, should it draw from the existing paths or completely redraw the chart paths from the beginning. By default, the chart is re-rendered from the existing paths
          * @param animate Should the chart animate on re-rendering
         */
        "updateOptions": (newOptions: ApexOptions, redrawPaths?: boolean, animate?: boolean) => Promise<void>;
        /**
          * (optional) Width
          * @see https ://apexcharts.com/docs/options/chart/width/
         */
        "width"?: ApexChartWidth;
    }
}
declare global {
    interface HTMLApexChartElement extends Components.ApexChart, HTMLStencilElement {
    }
    var HTMLApexChartElement: {
        prototype: HTMLApexChartElement;
        new (): HTMLApexChartElement;
    };
    interface HTMLElementTagNameMap {
        "apex-chart": HTMLApexChartElement;
    }
}
declare namespace LocalJSX {
    interface ApexChart {
        /**
          * (optional) Height
          * @see https ://apexcharts.com/docs/options/chart/height/
         */
        "height"?: ApexChartHeight;
        /**
          * (optional) Options
          * @see https ://apexcharts.com/docs/options/
         */
        "options"?: ApexOptions;
        /**
          * (optional) Series
          * @see https ://apexcharts.com/docs/options/series/
         */
        "series"?: ApexOptionsSeries;
        /**
          * (optional) StackType
          * @see https ://apexcharts.com/docs/options/chart/stackType/
         */
        "stackType"?: ApexChartStackType;
        /**
          * (optional) Stacked
          * @see https ://apexcharts.com/docs/options/chart/stacked/
         */
        "stacked"?: ApexChartStacked;
        /**
          * (optional) Toolbar
          * @see https ://apexcharts.com/docs/options/chart/toolbar/
         */
        "toolbar"?: ApexChartToolbar;
        /**
          * (optional) Type
          * @see https ://apexcharts.com/docs/options/chart/type/
         */
        "type"?: ApexChartType;
        /**
          * (optional) Width
          * @see https ://apexcharts.com/docs/options/chart/width/
         */
        "width"?: ApexChartWidth;
    }
    interface IntrinsicElements {
        "apex-chart": ApexChart;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "apex-chart": LocalJSX.ApexChart & JSXBase.HTMLAttributes<HTMLApexChartElement>;
        }
    }
}
