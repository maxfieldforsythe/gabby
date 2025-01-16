import React from "react";
import DocViewer, { PDFRenderer } from "react-doc-viewer";


const docs = [
    { uri: require("../../assets/pdf/bea.pdf") },
    { uri: require("../../assets/pdf/halcion.pdf") },
    { uri: require("../../assets/pdf/rcv.pdf") },
    { uri: require("../../assets/pdf/research.pdf") },
  ];

export const Doc = () => {
      return(
        <HelmetProvider>
          <Container>
            <DocViewer pluginRenderers={PDFRenderer} documents={docs} />
          </Container>
        </HelmetProvider>
      );
}