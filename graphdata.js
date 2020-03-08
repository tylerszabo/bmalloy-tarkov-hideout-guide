/*
  Copyright (c) 2020 Bradley Malloy

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

// Edges are common to all locales, so we don't need to split them out
var directUpgrades = [
  {
    from: "W1",
    to: "W2",
    arrows: "to"
  },
  {
    from: "W2",
    to: "W3",
    arrows: "to"
  },
  {
    from: "WC1",
    to: "WC2",
    arrows: "to"
  },
  {
    from: "WC2",
    to: "WC3",
    arrows: "to"
  },
  {
    from: "V1",
    to: "V2",
    arrows: "to"
  },
  {
    from: "V2",
    to: "V3",
    arrows: "to"
  },
  {
    from: "Sta1",
    to: "Sta2",
    arrows: "to"
  },
  {
    from: "Sta2",
    to: "Sta3",
    arrows: "to"
  },
  {
    from: "Sta3",
    to: "Sta4",
    arrows: "to"
  },
  {
    from: "Sec1",
    to: "Sec2",
    arrows: "to"
  },
  {
    from: "Sec2",
    to: "Sec3",
    arrows: "to"
  },
  {
    from: "RS1",
    to: "RS2",
    arrows: "to"
  },
  {
    from: "RS2",
    to: "RS3",
    arrows: "to"
  },
  {
    from: "NU1",
    to: "NU2",
    arrows: "to"
  },
  {
    from: "NU2",
    to: "NU3",
    arrows: "to"
  },
  {
    from: "M1",
    to: "M2",
    arrows: "to"
  },
  {
    from: "M2",
    to: "M3",
    arrows: "to"
  },
  {
    from: "L1",
    to: "L2",
    arrows: "to"
  },
  {
    from: "L2",
    to: "L3",
    arrows: "to"
  },
  {
    from: "IC1",
    to: "IC2",
    arrows: "to"
  },
  {
    from: "IC2",
    to: "IC3",
    arrows: "to"
  },
  {
    from: "I1",
    to: "I2",
    arrows: "to"
  },
  {
    from: "I2",
    to: "I3",
    arrows: "to"
  },
  {
    from: "H1",
    to: "H2",
    arrows: "to"
  },
  {
    from: "H2",
    to: "H3",
    arrows: "to"
  },
  {
    from: "G1",
    to: "G2",
    arrows: "to"
  },
  {
    from: "G2",
    to: "G3",
    arrows: "to"
  },
  {
    from: "BF1",
    to: "BF2",
    arrows: "to"
  },
  {
    from: "BF2",
    to: "BF3",
    arrows: "to"
  }
];
var stationRequirements = [
  {
    from: "G3",
    to: "AFU1",
    arrows: "to"
  },
  {
    from: "V3",
    to: "AFU1",
    arrows: "to"
  },
  {
    from: "IC2",
    to: "BF1",
    arrows: "to"
  },
  {
    from: "G3",
    to: "BF2",
    arrows: "to"
  },
  {
    from: "SP1",
    to: "BF3",
    arrows: "to"
  },
  {
    from: "WC3",
    to: "BF3",
    arrows: "to"
  },
  {
    from: "WC3",
    to: "BG1",
    arrows: "to"
  },
  {
    from: "NU3",
    to: "BG1",
    arrows: "to"
  },
  {
    from: "Sec2",
    to: "G2",
    arrows: "to"
  },
  {
    from: "V2",
    to: "G2",
    arrows: "to"
  },
  {
    from: "Sec3",
    to: "G3",
    arrows: "to"
  },
  {
    from: "V3",
    to: "G3",
    arrows: "to"
  },
  {
    from: "W2",
    to: "H3",
    arrows: "to"
  },
  {
    from: "G2",
    to: "H3",
    arrows: "to"
  },
  {
    from: "G1",
    to: "I2",
    arrows: "to"
  },
  {
    from: "G2",
    to: "I3",
    arrows: "to"
  },
  {
    from: "Sec2",
    to: "IC1",
    arrows: "to"
  },
  {
    from: "V2",
    to: "IC1",
    arrows: "to"
  },
  {
    from: "Sec3",
    to: "IC2",
    arrows: "to"
  },
  {
    from: "M3",
    to: "IC2",
    arrows: "to"
  },
  {
    from: "NU3",
    to: "IC2",
    arrows: "to"
  },
  {
    from: "G3",
    to: "IC3",
    arrows: "to"
  },
  {
    from: "WC1",
    to: "L2",
    arrows: "to"
  },
  {
    from: "WC2",
    to: "L3",
    arrows: "to"
  },
  {
    from: "RS3",
    to: "LIB1",
    arrows: "to"
  },
  {
    from: "G1",
    to: "NU1",
    arrows: "to"
  },
  {
    from: "L2",
    to: "NU2",
    arrows: "to"
  },
  {
    from: "G2",
    to: "NU3",
    arrows: "to"
  },
  {
    from: "L3",
    to: "NU3",
    arrows: "to"
  },
  {
    from: "Sta2",
    to: "NU3",
    arrows: "to"
  },
  {
    from: "G2",
    to: "RS2",
    arrows: "to"
  },
  {
    from: "H2",
    to: "RS2",
    arrows: "to"
  },
  {
    from: "H3",
    to: "RS3",
    arrows: "to"
  },
  {
    from: "G3",
    to: "RS3",
    arrows: "to"
  },
  {
    from: "IC2",
    to: "SC1",
    arrows: "to"
  },
  {
    from: "I3",
    to: "Sec3",
    arrows: "to"
  },
  {
    from: "I2",
    to: "SR1",
    arrows: "to"
  },
  {
    from: "G3",
    to: "SP1",
    arrows: "to"
  },
  {
    from: "W3",
    to: "SP1",
    arrows: "to"
  },
  {
    from: "H2",
    to: "Sta2",
    arrows: "to"
  },
  {
    from: "V2",
    to: "Sta3",
    arrows: "to"
  },
  {
    from: "G3",
    to: "Sta4",
    arrows: "to"
  },
  {
    from: "W3",
    to: "Sta4",
    arrows: "to"
  },
  {
    from: "H3",
    to: "Sta4",
    arrows: "to"
  },
  {
    from: "IC3",
    to: "Sta4",
    arrows: "to"
  },
  {
    from: "G2",
    to: "V3",
    arrows: "to"
  },
  {
    from: "W2",
    to: "WC2",
    arrows: "to"
  },
  {
    from: "G3",
    to: "WC3",
    arrows: "to"
  },
  {
    from: "I2",
    to: "W2",
    arrows: "to"
  },
  {
    from: "Sta2",
    to: "W3",
    arrows: "to"
  }
];