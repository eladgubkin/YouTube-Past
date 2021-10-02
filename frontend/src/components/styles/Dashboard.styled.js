import styled from "styled-components";

export const StyledDashboard = styled.main`
  margin-left: ${({ isOpen }) => (isOpen ? "300px" : 0)};
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 300px)" : "100%")};
  height: 100%;
  display: grid;
  padding: 20px;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "inner-grid inner-grid inner-grid timeline"
    "inner-grid inner-grid inner-grid timeline"
    "barchart1 barchart1 barchart2 barchart2"
    "table table table table";

  @media (max-width: 1324px) {
    grid-template-areas:
      "inner-grid inner-grid timeline timeline"
      "barchart1 barchart1 barchart2 barchart2"
      "table table table table";
  }

  @media (max-width: 768px) {
    grid-template-areas:
      "inner-grid inner-grid inner-grid inner-grid"
      "timeline timeline timeline timeline"
      "barchart1 barchart1 barchart1 barchart1"
      "barchart2 barchart2 barchart2 barchart2"
      "table table table table";
  }
`;

export const StyledInnerGrid = styled.section`
  grid-area: inner-grid;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "heatmap heatmap"
    "wordcloud piechart";

  @media (max-width: 1324px) {
    grid-template-areas:
      "heatmap heatmap"
      "wordcloud wordcloud"
      "piechart piechart";
  }
`;

export const StyledHeatmap = styled.section`
  grid-area: heatmap;
`;

export const StyledTimeline = styled.section`
  grid-area: timeline;
`;

export const StyledWordcloud = styled.section`
  grid-area: wordcloud;
`;

export const StyledPiephart = styled.section`
  grid-area: piechart;
`;

export const StyledBarchart1 = styled.section`
  grid-area: barchart1;
`;

export const StyledBarchart2 = styled.section`
  grid-area: barchart2;
`;

export const StyledTable = styled.section`
  grid-area: table;
`;
