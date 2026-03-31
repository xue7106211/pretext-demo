// node_modules/@chenglou/pretext/dist/bidi.js
var baseTypes = [
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "S",
  "B",
  "S",
  "WS",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "B",
  "B",
  "S",
  "WS",
  "ON",
  "ON",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "CS",
  "ON",
  "CS",
  "ON",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "EN",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "B",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "BN",
  "CS",
  "ON",
  "ET",
  "ET",
  "ET",
  "ET",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "ET",
  "ET",
  "EN",
  "EN",
  "ON",
  "L",
  "ON",
  "ON",
  "ON",
  "EN",
  "L",
  "ON",
  "ON",
  "ON",
  "ON",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "ON",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L",
  "L"
];
var arabicTypes = [
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "CS",
  "AL",
  "ON",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "AN",
  "ET",
  "AN",
  "AN",
  "AL",
  "AL",
  "AL",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "ON",
  "NSM",
  "NSM",
  "NSM",
  "NSM",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL",
  "AL"
];
function classifyChar(charCode) {
  if (charCode <= 255)
    return baseTypes[charCode];
  if (1424 <= charCode && charCode <= 1524)
    return "R";
  if (1536 <= charCode && charCode <= 1791)
    return arabicTypes[charCode & 255];
  if (1792 <= charCode && charCode <= 2220)
    return "AL";
  return "L";
}
function computeBidiLevels(str) {
  const len = str.length;
  if (len === 0)
    return null;
  const types = new Array(len);
  let numBidi = 0;
  for (let i = 0; i < len; i++) {
    const t = classifyChar(str.charCodeAt(i));
    if (t === "R" || t === "AL" || t === "AN")
      numBidi++;
    types[i] = t;
  }
  if (numBidi === 0)
    return null;
  const startLevel = len / numBidi < 0.3 ? 0 : 1;
  const levels = new Int8Array(len);
  for (let i = 0; i < len; i++)
    levels[i] = startLevel;
  const e = startLevel & 1 ? "R" : "L";
  const sor = e;
  let lastType = sor;
  for (let i = 0; i < len; i++) {
    if (types[i] === "NSM")
      types[i] = lastType;
    else
      lastType = types[i];
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "AL" ? "AN" : "EN";
    else if (t === "R" || t === "L" || t === "AL")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "AL")
      types[i] = "R";
  }
  for (let i = 1; i < len - 1; i++) {
    if (types[i] === "ES" && types[i - 1] === "EN" && types[i + 1] === "EN") {
      types[i] = "EN";
    }
    if (types[i] === "CS" && (types[i - 1] === "EN" || types[i - 1] === "AN") && types[i + 1] === types[i - 1]) {
      types[i] = types[i - 1];
    }
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "EN")
      continue;
    let j;
    for (j = i - 1; j >= 0 && types[j] === "ET"; j--)
      types[j] = "EN";
    for (j = i + 1; j < len && types[j] === "ET"; j++)
      types[j] = "EN";
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "WS" || t === "ES" || t === "ET" || t === "CS")
      types[i] = "ON";
  }
  lastType = sor;
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if (t === "EN")
      types[i] = lastType === "L" ? "L" : "EN";
    else if (t === "R" || t === "L")
      lastType = t;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] !== "ON")
      continue;
    let end = i + 1;
    while (end < len && types[end] === "ON")
      end++;
    const before = i > 0 ? types[i - 1] : sor;
    const after = end < len ? types[end] : sor;
    const bDir = before !== "L" ? "R" : "L";
    const aDir = after !== "L" ? "R" : "L";
    if (bDir === aDir) {
      for (let j = i; j < end; j++)
        types[j] = bDir;
    }
    i = end - 1;
  }
  for (let i = 0; i < len; i++) {
    if (types[i] === "ON")
      types[i] = e;
  }
  for (let i = 0; i < len; i++) {
    const t = types[i];
    if ((levels[i] & 1) === 0) {
      if (t === "R")
        levels[i]++;
      else if (t === "AN" || t === "EN")
        levels[i] += 2;
    } else if (t === "L" || t === "AN" || t === "EN") {
      levels[i]++;
    }
  }
  return levels;
}
function computeSegmentLevels(normalized, segStarts) {
  const bidiLevels = computeBidiLevels(normalized);
  if (bidiLevels === null)
    return null;
  const segLevels = new Int8Array(segStarts.length);
  for (let i = 0; i < segStarts.length; i++) {
    segLevels[i] = bidiLevels[segStarts[i]];
  }
  return segLevels;
}

// node_modules/@chenglou/pretext/dist/analysis.js
var collapsibleWhitespaceRunRe = /[ \t\n\r\f]+/g;
var needsWhitespaceNormalizationRe = /[\t\n\r\f]| {2,}|^ | $/;
function getWhiteSpaceProfile(whiteSpace) {
  const mode = whiteSpace ?? "normal";
  return mode === "pre-wrap" ? { mode, preserveOrdinarySpaces: true, preserveHardBreaks: true } : { mode, preserveOrdinarySpaces: false, preserveHardBreaks: false };
}
function normalizeWhitespaceNormal(text) {
  if (!needsWhitespaceNormalizationRe.test(text))
    return text;
  let normalized = text.replace(collapsibleWhitespaceRunRe, " ");
  if (normalized.charCodeAt(0) === 32) {
    normalized = normalized.slice(1);
  }
  if (normalized.length > 0 && normalized.charCodeAt(normalized.length - 1) === 32) {
    normalized = normalized.slice(0, -1);
  }
  return normalized;
}
function normalizeWhitespacePreWrap(text) {
  if (!/[\r\f]/.test(text))
    return text.replace(/\r\n/g, "\n");
  return text.replace(/\r\n/g, "\n").replace(/[\r\f]/g, "\n");
}
var sharedWordSegmenter = null;
var segmenterLocale;
function getSharedWordSegmenter() {
  if (sharedWordSegmenter === null) {
    sharedWordSegmenter = new Intl.Segmenter(segmenterLocale, { granularity: "word" });
  }
  return sharedWordSegmenter;
}
var arabicScriptRe = /\p{Script=Arabic}/u;
var combiningMarkRe = /\p{M}/u;
var decimalDigitRe = /\p{Nd}/u;
function containsArabicScript(text) {
  return arabicScriptRe.test(text);
}
function isCJK(s) {
  for (const ch of s) {
    const c = ch.codePointAt(0);
    if (c >= 19968 && c <= 40959 || c >= 13312 && c <= 19903 || c >= 131072 && c <= 173791 || c >= 173824 && c <= 177983 || c >= 177984 && c <= 178207 || c >= 178208 && c <= 183983 || c >= 183984 && c <= 191471 || c >= 196608 && c <= 201551 || c >= 63744 && c <= 64255 || c >= 194560 && c <= 195103 || c >= 12288 && c <= 12351 || c >= 12352 && c <= 12447 || c >= 12448 && c <= 12543 || c >= 44032 && c <= 55215 || c >= 65280 && c <= 65519) {
      return true;
    }
  }
  return false;
}
var kinsokuStart = /* @__PURE__ */ new Set([
  "\uFF0C",
  "\uFF0E",
  "\uFF01",
  "\uFF1A",
  "\uFF1B",
  "\uFF1F",
  "\u3001",
  "\u3002",
  "\u30FB",
  "\uFF09",
  "\u3015",
  "\u3009",
  "\u300B",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u3017",
  "\u3019",
  "\u301B",
  "\u30FC",
  "\u3005",
  "\u303B",
  "\u309D",
  "\u309E",
  "\u30FD",
  "\u30FE"
]);
var kinsokuEnd = /* @__PURE__ */ new Set([
  '"',
  "(",
  "[",
  "{",
  "\u201C",
  "\u2018",
  "\xAB",
  "\u2039",
  "\uFF08",
  "\u3014",
  "\u3008",
  "\u300A",
  "\u300C",
  "\u300E",
  "\u3010",
  "\u3016",
  "\u3018",
  "\u301A"
]);
var forwardStickyGlue = /* @__PURE__ */ new Set([
  "'",
  "\u2019"
]);
var leftStickyPunctuation = /* @__PURE__ */ new Set([
  ".",
  ",",
  "!",
  "?",
  ":",
  ";",
  "\u060C",
  "\u061B",
  "\u061F",
  "\u0964",
  "\u0965",
  "\u104A",
  "\u104B",
  "\u104C",
  "\u104D",
  "\u104F",
  ")",
  "]",
  "}",
  "%",
  '"',
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u2026"
]);
var arabicNoSpaceTrailingPunctuation = /* @__PURE__ */ new Set([
  ":",
  ".",
  "\u060C",
  "\u061B"
]);
var myanmarMedialGlue = /* @__PURE__ */ new Set([
  "\u104F"
]);
var closingQuoteChars = /* @__PURE__ */ new Set([
  "\u201D",
  "\u2019",
  "\xBB",
  "\u203A",
  "\u300D",
  "\u300F",
  "\u3011",
  "\u300B",
  "\u3009",
  "\u3015",
  "\uFF09"
]);
function isLeftStickyPunctuationSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  let sawPunctuation = false;
  for (const ch of segment) {
    if (leftStickyPunctuation.has(ch)) {
      sawPunctuation = true;
      continue;
    }
    if (sawPunctuation && combiningMarkRe.test(ch))
      continue;
    return false;
  }
  return sawPunctuation;
}
function isCJKLineStartProhibitedSegment(segment) {
  for (const ch of segment) {
    if (!kinsokuStart.has(ch) && !leftStickyPunctuation.has(ch))
      return false;
  }
  return segment.length > 0;
}
function isForwardStickyClusterSegment(segment) {
  if (isEscapedQuoteClusterSegment(segment))
    return true;
  for (const ch of segment) {
    if (!kinsokuEnd.has(ch) && !forwardStickyGlue.has(ch) && !combiningMarkRe.test(ch))
      return false;
  }
  return segment.length > 0;
}
function isEscapedQuoteClusterSegment(segment) {
  let sawQuote = false;
  for (const ch of segment) {
    if (ch === "\\" || combiningMarkRe.test(ch))
      continue;
    if (kinsokuEnd.has(ch) || leftStickyPunctuation.has(ch) || forwardStickyGlue.has(ch)) {
      sawQuote = true;
      continue;
    }
    return false;
  }
  return sawQuote;
}
function splitTrailingForwardStickyCluster(text) {
  const chars = Array.from(text);
  let splitIndex = chars.length;
  while (splitIndex > 0) {
    const ch = chars[splitIndex - 1];
    if (combiningMarkRe.test(ch)) {
      splitIndex--;
      continue;
    }
    if (kinsokuEnd.has(ch) || forwardStickyGlue.has(ch)) {
      splitIndex--;
      continue;
    }
    break;
  }
  if (splitIndex <= 0 || splitIndex === chars.length)
    return null;
  return {
    head: chars.slice(0, splitIndex).join(""),
    tail: chars.slice(splitIndex).join("")
  };
}
function isRepeatedSingleCharRun(segment, ch) {
  if (segment.length === 0)
    return false;
  for (const part of segment) {
    if (part !== ch)
      return false;
  }
  return true;
}
function endsWithArabicNoSpacePunctuation(segment) {
  if (!containsArabicScript(segment) || segment.length === 0)
    return false;
  return arabicNoSpaceTrailingPunctuation.has(segment[segment.length - 1]);
}
function endsWithMyanmarMedialGlue(segment) {
  if (segment.length === 0)
    return false;
  return myanmarMedialGlue.has(segment[segment.length - 1]);
}
function splitLeadingSpaceAndMarks(segment) {
  if (segment.length < 2 || segment[0] !== " ")
    return null;
  const marks = segment.slice(1);
  if (/^\p{M}+$/u.test(marks)) {
    return { space: " ", marks };
  }
  return null;
}
function endsWithClosingQuote(text) {
  for (let i = text.length - 1; i >= 0; i--) {
    const ch = text[i];
    if (closingQuoteChars.has(ch))
      return true;
    if (!leftStickyPunctuation.has(ch))
      return false;
  }
  return false;
}
function classifySegmentBreakChar(ch, whiteSpaceProfile) {
  if (whiteSpaceProfile.preserveOrdinarySpaces || whiteSpaceProfile.preserveHardBreaks) {
    if (ch === " ")
      return "preserved-space";
    if (ch === "	")
      return "tab";
    if (whiteSpaceProfile.preserveHardBreaks && ch === "\n")
      return "hard-break";
  }
  if (ch === " ")
    return "space";
  if (ch === "\xA0" || ch === "\u202F" || ch === "\u2060" || ch === "\uFEFF") {
    return "glue";
  }
  if (ch === "\u200B")
    return "zero-width-break";
  if (ch === "\xAD")
    return "soft-hyphen";
  return "text";
}
function splitSegmentByBreakKind(segment, isWordLike, start, whiteSpaceProfile) {
  const pieces = [];
  let currentKind = null;
  let currentText = "";
  let currentStart = start;
  let currentWordLike = false;
  let offset = 0;
  for (const ch of segment) {
    const kind = classifySegmentBreakChar(ch, whiteSpaceProfile);
    const wordLike = kind === "text" && isWordLike;
    if (currentKind !== null && kind === currentKind && wordLike === currentWordLike) {
      currentText += ch;
      offset += ch.length;
      continue;
    }
    if (currentKind !== null) {
      pieces.push({
        text: currentText,
        isWordLike: currentWordLike,
        kind: currentKind,
        start: currentStart
      });
    }
    currentKind = kind;
    currentText = ch;
    currentStart = start + offset;
    currentWordLike = wordLike;
    offset += ch.length;
  }
  if (currentKind !== null) {
    pieces.push({
      text: currentText,
      isWordLike: currentWordLike,
      kind: currentKind,
      start: currentStart
    });
  }
  return pieces;
}
function isTextRunBoundary(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "zero-width-break" || kind === "hard-break";
}
var urlSchemeSegmentRe = /^[A-Za-z][A-Za-z0-9+.-]*:$/;
function isUrlLikeRunStart(segmentation, index) {
  const text = segmentation.texts[index];
  if (text.startsWith("www."))
    return true;
  return urlSchemeSegmentRe.test(text) && index + 1 < segmentation.len && segmentation.kinds[index + 1] === "text" && segmentation.texts[index + 1] === "//";
}
function isUrlQueryBoundarySegment(text) {
  return text.includes("?") && (text.includes("://") || text.startsWith("www."));
}
function mergeUrlLikeRuns(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < segmentation.len; i++) {
    if (kinds[i] !== "text" || !isUrlLikeRunStart(segmentation, i))
      continue;
    let j = i + 1;
    while (j < segmentation.len && !isTextRunBoundary(kinds[j])) {
      texts[i] += texts[j];
      isWordLike[i] = true;
      const endsQueryPrefix = texts[j].includes("?");
      kinds[j] = "text";
      texts[j] = "";
      j++;
      if (endsQueryPrefix)
        break;
    }
  }
  let compactLen = 0;
  for (let read = 0; read < texts.length; read++) {
    const text = texts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      texts[compactLen] = text;
      isWordLike[compactLen] = isWordLike[read];
      kinds[compactLen] = kinds[read];
      starts[compactLen] = starts[read];
    }
    compactLen++;
  }
  texts.length = compactLen;
  isWordLike.length = compactLen;
  kinds.length = compactLen;
  starts.length = compactLen;
  return {
    len: compactLen,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeUrlQueryRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
    if (!isUrlQueryBoundarySegment(text))
      continue;
    const nextIndex = i + 1;
    if (nextIndex >= segmentation.len || isTextRunBoundary(segmentation.kinds[nextIndex])) {
      continue;
    }
    let queryText = "";
    const queryStart = segmentation.starts[nextIndex];
    let j = nextIndex;
    while (j < segmentation.len && !isTextRunBoundary(segmentation.kinds[j])) {
      queryText += segmentation.texts[j];
      j++;
    }
    if (queryText.length > 0) {
      texts.push(queryText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(queryStart);
      i = j - 1;
    }
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
var numericJoinerChars = /* @__PURE__ */ new Set([
  ":",
  "-",
  "/",
  "\xD7",
  ",",
  ".",
  "+",
  "\u2013",
  "\u2014"
]);
var asciiPunctuationChainSegmentRe = /^[A-Za-z0-9_]+[,:;]*$/;
var asciiPunctuationChainTrailingJoinersRe = /[,:;]+$/;
function segmentContainsDecimalDigit(text) {
  for (const ch of text) {
    if (decimalDigitRe.test(ch))
      return true;
  }
  return false;
}
function isNumericRunSegment(text) {
  if (text.length === 0)
    return false;
  for (const ch of text) {
    if (decimalDigitRe.test(ch) || numericJoinerChars.has(ch))
      continue;
    return false;
  }
  return true;
}
function mergeNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    if (kind === "text" && isNumericRunSegment(text) && segmentContainsDecimalDigit(text)) {
      let mergedText = text;
      let j = i + 1;
      while (j < segmentation.len && segmentation.kinds[j] === "text" && isNumericRunSegment(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeAsciiPunctuationChains(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    const kind = segmentation.kinds[i];
    const wordLike = segmentation.isWordLike[i];
    if (kind === "text" && wordLike && asciiPunctuationChainSegmentRe.test(text)) {
      let mergedText = text;
      let j = i + 1;
      while (asciiPunctuationChainTrailingJoinersRe.test(mergedText) && j < segmentation.len && segmentation.kinds[j] === "text" && segmentation.isWordLike[j] && asciiPunctuationChainSegmentRe.test(segmentation.texts[j])) {
        mergedText += segmentation.texts[j];
        j++;
      }
      texts.push(mergedText);
      isWordLike.push(true);
      kinds.push("text");
      starts.push(segmentation.starts[i]);
      i = j - 1;
      continue;
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function splitHyphenatedNumericRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  for (let i = 0; i < segmentation.len; i++) {
    const text = segmentation.texts[i];
    if (segmentation.kinds[i] === "text" && text.includes("-")) {
      const parts = text.split("-");
      let shouldSplit = parts.length > 1;
      for (let j = 0; j < parts.length; j++) {
        const part = parts[j];
        if (!shouldSplit)
          break;
        if (part.length === 0 || !segmentContainsDecimalDigit(part) || !isNumericRunSegment(part)) {
          shouldSplit = false;
        }
      }
      if (shouldSplit) {
        let offset = 0;
        for (let j = 0; j < parts.length; j++) {
          const part = parts[j];
          const splitText = j < parts.length - 1 ? `${part}-` : part;
          texts.push(splitText);
          isWordLike.push(true);
          kinds.push("text");
          starts.push(segmentation.starts[i] + offset);
          offset += splitText.length;
        }
        continue;
      }
    }
    texts.push(text);
    isWordLike.push(segmentation.isWordLike[i]);
    kinds.push(segmentation.kinds[i]);
    starts.push(segmentation.starts[i]);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function mergeGlueConnectedTextRuns(segmentation) {
  const texts = [];
  const isWordLike = [];
  const kinds = [];
  const starts = [];
  let read = 0;
  while (read < segmentation.len) {
    let text = segmentation.texts[read];
    let wordLike = segmentation.isWordLike[read];
    let kind = segmentation.kinds[read];
    let start = segmentation.starts[read];
    if (kind === "glue") {
      let glueText = text;
      const glueStart = start;
      read++;
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        glueText += segmentation.texts[read];
        read++;
      }
      if (read < segmentation.len && segmentation.kinds[read] === "text") {
        text = glueText + segmentation.texts[read];
        wordLike = segmentation.isWordLike[read];
        kind = "text";
        start = glueStart;
        read++;
      } else {
        texts.push(glueText);
        isWordLike.push(false);
        kinds.push("glue");
        starts.push(glueStart);
        continue;
      }
    } else {
      read++;
    }
    if (kind === "text") {
      while (read < segmentation.len && segmentation.kinds[read] === "glue") {
        let glueText = "";
        while (read < segmentation.len && segmentation.kinds[read] === "glue") {
          glueText += segmentation.texts[read];
          read++;
        }
        if (read < segmentation.len && segmentation.kinds[read] === "text") {
          text += glueText + segmentation.texts[read];
          wordLike = wordLike || segmentation.isWordLike[read];
          read++;
          continue;
        }
        text += glueText;
      }
    }
    texts.push(text);
    isWordLike.push(wordLike);
    kinds.push(kind);
    starts.push(start);
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function carryTrailingForwardStickyAcrossCJKBoundary(segmentation) {
  const texts = segmentation.texts.slice();
  const isWordLike = segmentation.isWordLike.slice();
  const kinds = segmentation.kinds.slice();
  const starts = segmentation.starts.slice();
  for (let i = 0; i < texts.length - 1; i++) {
    if (kinds[i] !== "text" || kinds[i + 1] !== "text")
      continue;
    if (!isCJK(texts[i]) || !isCJK(texts[i + 1]))
      continue;
    const split = splitTrailingForwardStickyCluster(texts[i]);
    if (split === null)
      continue;
    texts[i] = split.head;
    texts[i + 1] = split.tail + texts[i + 1];
    starts[i + 1] = starts[i] + split.head.length;
  }
  return {
    len: texts.length,
    texts,
    isWordLike,
    kinds,
    starts
  };
}
function buildMergedSegmentation(normalized, profile, whiteSpaceProfile) {
  const wordSegmenter = getSharedWordSegmenter();
  let mergedLen = 0;
  const mergedTexts = [];
  const mergedWordLike = [];
  const mergedKinds = [];
  const mergedStarts = [];
  for (const s of wordSegmenter.segment(normalized)) {
    for (const piece of splitSegmentByBreakKind(s.segment, s.isWordLike ?? false, s.index, whiteSpaceProfile)) {
      const isText = piece.kind === "text";
      if (profile.carryCJKAfterClosingQuote && isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJK(piece.text) && isCJK(mergedTexts[mergedLen - 1]) && endsWithClosingQuote(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && isCJKLineStartProhibitedSegment(piece.text) && isCJK(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && endsWithMyanmarMedialGlue(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = mergedWordLike[mergedLen - 1] || piece.isWordLike;
      } else if (isText && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.isWordLike && containsArabicScript(piece.text) && endsWithArabicNoSpacePunctuation(mergedTexts[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
        mergedWordLike[mergedLen - 1] = true;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && piece.text.length === 1 && piece.text !== "-" && piece.text !== "\u2014" && isRepeatedSingleCharRun(mergedTexts[mergedLen - 1], piece.text)) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else if (isText && !piece.isWordLike && mergedLen > 0 && mergedKinds[mergedLen - 1] === "text" && (isLeftStickyPunctuationSegment(piece.text) || piece.text === "-" && mergedWordLike[mergedLen - 1])) {
        mergedTexts[mergedLen - 1] += piece.text;
      } else {
        mergedTexts[mergedLen] = piece.text;
        mergedWordLike[mergedLen] = piece.isWordLike;
        mergedKinds[mergedLen] = piece.kind;
        mergedStarts[mergedLen] = piece.start;
        mergedLen++;
      }
    }
  }
  for (let i = 1; i < mergedLen; i++) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isEscapedQuoteClusterSegment(mergedTexts[i]) && mergedKinds[i - 1] === "text") {
      mergedTexts[i - 1] += mergedTexts[i];
      mergedWordLike[i - 1] = mergedWordLike[i - 1] || mergedWordLike[i];
      mergedTexts[i] = "";
    }
  }
  for (let i = mergedLen - 2; i >= 0; i--) {
    if (mergedKinds[i] === "text" && !mergedWordLike[i] && isForwardStickyClusterSegment(mergedTexts[i])) {
      let j = i + 1;
      while (j < mergedLen && mergedTexts[j] === "")
        j++;
      if (j < mergedLen && mergedKinds[j] === "text") {
        mergedTexts[j] = mergedTexts[i] + mergedTexts[j];
        mergedStarts[j] = mergedStarts[i];
        mergedTexts[i] = "";
      }
    }
  }
  let compactLen = 0;
  for (let read = 0; read < mergedLen; read++) {
    const text = mergedTexts[read];
    if (text.length === 0)
      continue;
    if (compactLen !== read) {
      mergedTexts[compactLen] = text;
      mergedWordLike[compactLen] = mergedWordLike[read];
      mergedKinds[compactLen] = mergedKinds[read];
      mergedStarts[compactLen] = mergedStarts[read];
    }
    compactLen++;
  }
  mergedTexts.length = compactLen;
  mergedWordLike.length = compactLen;
  mergedKinds.length = compactLen;
  mergedStarts.length = compactLen;
  const compacted = mergeGlueConnectedTextRuns({
    len: compactLen,
    texts: mergedTexts,
    isWordLike: mergedWordLike,
    kinds: mergedKinds,
    starts: mergedStarts
  });
  const withMergedUrls = carryTrailingForwardStickyAcrossCJKBoundary(mergeAsciiPunctuationChains(splitHyphenatedNumericRuns(mergeNumericRuns(mergeUrlQueryRuns(mergeUrlLikeRuns(compacted))))));
  for (let i = 0; i < withMergedUrls.len - 1; i++) {
    const split = splitLeadingSpaceAndMarks(withMergedUrls.texts[i]);
    if (split === null)
      continue;
    if (withMergedUrls.kinds[i] !== "space" && withMergedUrls.kinds[i] !== "preserved-space" || withMergedUrls.kinds[i + 1] !== "text" || !containsArabicScript(withMergedUrls.texts[i + 1])) {
      continue;
    }
    withMergedUrls.texts[i] = split.space;
    withMergedUrls.isWordLike[i] = false;
    withMergedUrls.kinds[i] = withMergedUrls.kinds[i] === "preserved-space" ? "preserved-space" : "space";
    withMergedUrls.texts[i + 1] = split.marks + withMergedUrls.texts[i + 1];
    withMergedUrls.starts[i + 1] = withMergedUrls.starts[i] + split.space.length;
  }
  return withMergedUrls;
}
function compileAnalysisChunks(segmentation, whiteSpaceProfile) {
  if (segmentation.len === 0)
    return [];
  if (!whiteSpaceProfile.preserveHardBreaks) {
    return [{
      startSegmentIndex: 0,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    }];
  }
  const chunks = [];
  let startSegmentIndex = 0;
  for (let i = 0; i < segmentation.len; i++) {
    if (segmentation.kinds[i] !== "hard-break")
      continue;
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: i,
      consumedEndSegmentIndex: i + 1
    });
    startSegmentIndex = i + 1;
  }
  if (startSegmentIndex < segmentation.len) {
    chunks.push({
      startSegmentIndex,
      endSegmentIndex: segmentation.len,
      consumedEndSegmentIndex: segmentation.len
    });
  }
  return chunks;
}
function analyzeText(text, profile, whiteSpace = "normal") {
  const whiteSpaceProfile = getWhiteSpaceProfile(whiteSpace);
  const normalized = whiteSpaceProfile.mode === "pre-wrap" ? normalizeWhitespacePreWrap(text) : normalizeWhitespaceNormal(text);
  if (normalized.length === 0) {
    return {
      normalized,
      chunks: [],
      len: 0,
      texts: [],
      isWordLike: [],
      kinds: [],
      starts: []
    };
  }
  const segmentation = buildMergedSegmentation(normalized, profile, whiteSpaceProfile);
  return {
    normalized,
    chunks: compileAnalysisChunks(segmentation, whiteSpaceProfile),
    ...segmentation
  };
}

// node_modules/@chenglou/pretext/dist/measurement.js
var measureContext = null;
var segmentMetricCaches = /* @__PURE__ */ new Map();
var cachedEngineProfile = null;
var emojiPresentationRe = /\p{Emoji_Presentation}/u;
var maybeEmojiRe = /[\p{Emoji_Presentation}\p{Extended_Pictographic}\p{Regional_Indicator}\uFE0F\u20E3]/u;
var sharedGraphemeSegmenter = null;
var emojiCorrectionCache = /* @__PURE__ */ new Map();
function getMeasureContext() {
  if (measureContext !== null)
    return measureContext;
  if (typeof OffscreenCanvas !== "undefined") {
    measureContext = new OffscreenCanvas(1, 1).getContext("2d");
    return measureContext;
  }
  if (typeof document !== "undefined") {
    measureContext = document.createElement("canvas").getContext("2d");
    return measureContext;
  }
  throw new Error("Text measurement requires OffscreenCanvas or a DOM canvas context.");
}
function getSegmentMetricCache(font) {
  let cache = segmentMetricCaches.get(font);
  if (!cache) {
    cache = /* @__PURE__ */ new Map();
    segmentMetricCaches.set(font, cache);
  }
  return cache;
}
function getSegmentMetrics(seg, cache) {
  let metrics = cache.get(seg);
  if (metrics === void 0) {
    const ctx = getMeasureContext();
    metrics = {
      width: ctx.measureText(seg).width,
      containsCJK: isCJK(seg)
    };
    cache.set(seg, metrics);
  }
  return metrics;
}
function getEngineProfile() {
  if (cachedEngineProfile !== null)
    return cachedEngineProfile;
  if (typeof navigator === "undefined") {
    cachedEngineProfile = {
      lineFitEpsilon: 5e-3,
      carryCJKAfterClosingQuote: false,
      preferPrefixWidthsForBreakableRuns: false,
      preferEarlySoftHyphenBreak: false
    };
    return cachedEngineProfile;
  }
  const ua = navigator.userAgent;
  const vendor = navigator.vendor;
  const isSafari = vendor === "Apple Computer, Inc." && ua.includes("Safari/") && !ua.includes("Chrome/") && !ua.includes("Chromium/") && !ua.includes("CriOS/") && !ua.includes("FxiOS/") && !ua.includes("EdgiOS/");
  const isChromium = ua.includes("Chrome/") || ua.includes("Chromium/") || ua.includes("CriOS/") || ua.includes("Edg/");
  cachedEngineProfile = {
    lineFitEpsilon: isSafari ? 1 / 64 : 5e-3,
    carryCJKAfterClosingQuote: isChromium,
    preferPrefixWidthsForBreakableRuns: isSafari,
    preferEarlySoftHyphenBreak: isSafari
  };
  return cachedEngineProfile;
}
function parseFontSize(font) {
  const m = font.match(/(\d+(?:\.\d+)?)\s*px/);
  return m ? parseFloat(m[1]) : 16;
}
function getSharedGraphemeSegmenter() {
  if (sharedGraphemeSegmenter === null) {
    sharedGraphemeSegmenter = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter;
}
function isEmojiGrapheme(g) {
  return emojiPresentationRe.test(g) || g.includes("\uFE0F");
}
function textMayContainEmoji(text) {
  return maybeEmojiRe.test(text);
}
function getEmojiCorrection(font, fontSize) {
  let correction = emojiCorrectionCache.get(font);
  if (correction !== void 0)
    return correction;
  const ctx = getMeasureContext();
  ctx.font = font;
  const canvasW = ctx.measureText("\u{1F600}").width;
  correction = 0;
  if (canvasW > fontSize + 0.5 && typeof document !== "undefined" && document.body !== null) {
    const span = document.createElement("span");
    span.style.font = font;
    span.style.display = "inline-block";
    span.style.visibility = "hidden";
    span.style.position = "absolute";
    span.textContent = "\u{1F600}";
    document.body.appendChild(span);
    const domW = span.getBoundingClientRect().width;
    document.body.removeChild(span);
    if (canvasW - domW > 0.5) {
      correction = canvasW - domW;
    }
  }
  emojiCorrectionCache.set(font, correction);
  return correction;
}
function countEmojiGraphemes(text) {
  let count = 0;
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const g of graphemeSegmenter.segment(text)) {
    if (isEmojiGrapheme(g.segment))
      count++;
  }
  return count;
}
function getEmojiCount(seg, metrics) {
  if (metrics.emojiCount === void 0) {
    metrics.emojiCount = countEmojiGraphemes(seg);
  }
  return metrics.emojiCount;
}
function getCorrectedSegmentWidth(seg, metrics, emojiCorrection) {
  if (emojiCorrection === 0)
    return metrics.width;
  return metrics.width - getEmojiCount(seg, metrics) * emojiCorrection;
}
function getSegmentGraphemeWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemeWidths !== void 0)
    return metrics.graphemeWidths;
  const widths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  for (const gs of graphemeSegmenter.segment(seg)) {
    const graphemeMetrics = getSegmentMetrics(gs.segment, cache);
    widths.push(getCorrectedSegmentWidth(gs.segment, graphemeMetrics, emojiCorrection));
  }
  metrics.graphemeWidths = widths.length > 1 ? widths : null;
  return metrics.graphemeWidths;
}
function getSegmentGraphemePrefixWidths(seg, metrics, cache, emojiCorrection) {
  if (metrics.graphemePrefixWidths !== void 0)
    return metrics.graphemePrefixWidths;
  const prefixWidths = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter();
  let prefix = "";
  for (const gs of graphemeSegmenter.segment(seg)) {
    prefix += gs.segment;
    const prefixMetrics = getSegmentMetrics(prefix, cache);
    prefixWidths.push(getCorrectedSegmentWidth(prefix, prefixMetrics, emojiCorrection));
  }
  metrics.graphemePrefixWidths = prefixWidths.length > 1 ? prefixWidths : null;
  return metrics.graphemePrefixWidths;
}
function getFontMeasurementState(font, needsEmojiCorrection) {
  const ctx = getMeasureContext();
  ctx.font = font;
  const cache = getSegmentMetricCache(font);
  const fontSize = parseFontSize(font);
  const emojiCorrection = needsEmojiCorrection ? getEmojiCorrection(font, fontSize) : 0;
  return { cache, fontSize, emojiCorrection };
}

// node_modules/@chenglou/pretext/dist/line-break.js
function canBreakAfter(kind) {
  return kind === "space" || kind === "preserved-space" || kind === "tab" || kind === "zero-width-break" || kind === "soft-hyphen";
}
function getTabAdvance(lineWidth, tabStopAdvance) {
  if (tabStopAdvance <= 0)
    return 0;
  const remainder = lineWidth % tabStopAdvance;
  if (Math.abs(remainder) <= 1e-6)
    return tabStopAdvance;
  return tabStopAdvance - remainder;
}
function getBreakableAdvance(graphemeWidths, graphemePrefixWidths, graphemeIndex, preferPrefixWidths) {
  if (!preferPrefixWidths || graphemePrefixWidths === null) {
    return graphemeWidths[graphemeIndex];
  }
  return graphemePrefixWidths[graphemeIndex] - (graphemeIndex > 0 ? graphemePrefixWidths[graphemeIndex - 1] : 0);
}
function fitSoftHyphenBreak(graphemeWidths, initialWidth, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, cumulativeWidths) {
  let fitCount = 0;
  let fittedWidth = initialWidth;
  while (fitCount < graphemeWidths.length) {
    const nextWidth = cumulativeWidths ? initialWidth + graphemeWidths[fitCount] : fittedWidth + graphemeWidths[fitCount];
    const nextLineWidth = fitCount + 1 < graphemeWidths.length ? nextWidth + discretionaryHyphenWidth : nextWidth;
    if (nextLineWidth > maxWidth + lineFitEpsilon)
      break;
    fittedWidth = nextWidth;
    fitCount++;
  }
  return { fitCount, fittedWidth };
}
function findChunkIndexForStart(prepared, segmentIndex) {
  for (let i = 0; i < prepared.chunks.length; i++) {
    const chunk = prepared.chunks[i];
    if (segmentIndex < chunk.consumedEndSegmentIndex)
      return i;
  }
  return -1;
}
function normalizeLineStart(prepared, start) {
  let segmentIndex = start.segmentIndex;
  const graphemeIndex = start.graphemeIndex;
  if (segmentIndex >= prepared.widths.length)
    return null;
  if (graphemeIndex > 0)
    return start;
  const chunkIndex = findChunkIndexForStart(prepared, segmentIndex);
  if (chunkIndex < 0)
    return null;
  const chunk = prepared.chunks[chunkIndex];
  if (chunk.startSegmentIndex === chunk.endSegmentIndex && segmentIndex === chunk.startSegmentIndex) {
    return { segmentIndex, graphemeIndex: 0 };
  }
  if (segmentIndex < chunk.startSegmentIndex)
    segmentIndex = chunk.startSegmentIndex;
  while (segmentIndex < chunk.endSegmentIndex) {
    const kind = prepared.kinds[segmentIndex];
    if (kind !== "space" && kind !== "zero-width-break" && kind !== "soft-hyphen") {
      return { segmentIndex, graphemeIndex: 0 };
    }
    segmentIndex++;
  }
  if (chunk.consumedEndSegmentIndex >= prepared.widths.length)
    return null;
  return { segmentIndex: chunk.consumedEndSegmentIndex, graphemeIndex: 0 };
}
function walkPreparedLinesSimple(prepared, maxWidth, onLine) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  if (widths.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakPaintWidth = 0;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  let i = 0;
  while (i < widths.length) {
    const w = widths[i];
    const kind = kinds[i];
    if (!hasContent) {
      if (w > maxWidth && breakableWidths[i] !== null) {
        appendBreakableSegment(i);
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      i++;
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        emitCurrentLine(i + 1, 0, lineW - w);
        i++;
        continue;
      }
      if (pendingBreakSegmentIndex >= 0) {
        emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
        continue;
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        emitCurrentLine();
        appendBreakableSegment(i);
        i++;
        continue;
      }
      emitCurrentLine();
      continue;
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
    i++;
  }
  if (hasContent)
    emitCurrentLine();
  return lineCount;
}
function walkPreparedLines(prepared, maxWidth, onLine) {
  if (prepared.simpleLineWalkFastPath) {
    return walkPreparedLinesSimple(prepared, maxWidth, onLine);
  }
  const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance, chunks } = prepared;
  if (widths.length === 0 || chunks.length === 0)
    return 0;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineCount = 0;
  let lineW = 0;
  let hasContent = false;
  let lineStartSegmentIndex = 0;
  let lineStartGraphemeIndex = 0;
  let lineEndSegmentIndex = 0;
  let lineEndGraphemeIndex = 0;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function emitCurrentLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    lineCount++;
    onLine?.({
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    });
    lineW = 0;
    hasContent = false;
    clearPendingBreak();
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineStartSegmentIndex = segmentIndex;
    lineStartGraphemeIndex = graphemeIndex;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegment(segmentIndex) {
    appendBreakableSegmentFrom(segmentIndex, 0);
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        emitCurrentLine();
        startLineAtGrapheme(segmentIndex, g, gw);
      } else {
        lineW += gw;
        lineEndSegmentIndex = segmentIndex;
        lineEndGraphemeIndex = g + 1;
      }
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
  }
  function continueSoftHyphenBreakableSegment(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen")
      return false;
    const gWidths = breakableWidths[segmentIndex];
    if (gWidths === null)
      return false;
    const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
    const usesPrefixWidths = fitWidths !== gWidths;
    const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
    if (fitCount === 0)
      return false;
    lineW = fittedWidth;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = fitCount;
    clearPendingBreak();
    if (fitCount === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
      return true;
    }
    emitCurrentLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
    appendBreakableSegmentFrom(segmentIndex, fitCount);
    return true;
  }
  function emitEmptyChunk(chunk) {
    lineCount++;
    onLine?.({
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    });
    clearPendingBreak();
  }
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
      emitEmptyChunk(chunk);
      continue;
    }
    hasContent = false;
    lineW = 0;
    lineStartSegmentIndex = chunk.startSegmentIndex;
    lineStartGraphemeIndex = 0;
    lineEndSegmentIndex = chunk.startSegmentIndex;
    lineEndGraphemeIndex = 0;
    clearPendingBreak();
    let i = chunk.startSegmentIndex;
    while (i < chunk.endSegmentIndex) {
      const kind = kinds[i];
      const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
      if (kind === "soft-hyphen") {
        if (hasContent) {
          lineEndSegmentIndex = i + 1;
          lineEndGraphemeIndex = 0;
          pendingBreakSegmentIndex = i + 1;
          pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
          pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
          pendingBreakKind = kind;
        }
        i++;
        continue;
      }
      if (!hasContent) {
        if (w > maxWidth && breakableWidths[i] !== null) {
          appendBreakableSegment(i);
        } else {
          startLineAtSegment(i, w);
        }
        updatePendingBreakForWholeSegment(i, w);
        i++;
        continue;
      }
      const newW = lineW + w;
      if (newW > maxWidth + lineFitEpsilon) {
        const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
        const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
        if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (pendingBreakKind === "soft-hyphen" && continueSoftHyphenBreakableSegment(i)) {
          i++;
          continue;
        }
        if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
          appendWholeSegment(i, w);
          emitCurrentLine(i + 1, 0, currentBreakPaintWidth);
          i++;
          continue;
        }
        if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
          emitCurrentLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
          continue;
        }
        if (w > maxWidth && breakableWidths[i] !== null) {
          emitCurrentLine();
          appendBreakableSegment(i);
          i++;
          continue;
        }
        emitCurrentLine();
        continue;
      }
      appendWholeSegment(i, w);
      updatePendingBreakForWholeSegment(i, w);
      i++;
    }
    if (hasContent) {
      const finalPaintWidth = pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex ? pendingBreakPaintWidth : lineW;
      emitCurrentLine(chunk.consumedEndSegmentIndex, 0, finalPaintWidth);
    }
  }
  return lineCount;
}
function layoutNextLineRange(prepared, start, maxWidth) {
  const normalizedStart = normalizeLineStart(prepared, start);
  if (normalizedStart === null)
    return null;
  if (prepared.simpleLineWalkFastPath) {
    return layoutNextLineRangeSimple(prepared, normalizedStart, maxWidth);
  }
  const chunkIndex = findChunkIndexForStart(prepared, normalizedStart.segmentIndex);
  if (chunkIndex < 0)
    return null;
  const chunk = prepared.chunks[chunkIndex];
  if (chunk.startSegmentIndex === chunk.endSegmentIndex) {
    return {
      startSegmentIndex: chunk.startSegmentIndex,
      startGraphemeIndex: 0,
      endSegmentIndex: chunk.consumedEndSegmentIndex,
      endGraphemeIndex: 0,
      width: 0
    };
  }
  const { widths, lineEndFitAdvances, lineEndPaintAdvances, kinds, breakableWidths, breakablePrefixWidths, discretionaryHyphenWidth, tabStopAdvance } = prepared;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineW = 0;
  let hasContent = false;
  const lineStartSegmentIndex = normalizedStart.segmentIndex;
  const lineStartGraphemeIndex = normalizedStart.graphemeIndex;
  let lineEndSegmentIndex = lineStartSegmentIndex;
  let lineEndGraphemeIndex = lineStartGraphemeIndex;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakFitWidth = 0;
  let pendingBreakPaintWidth = 0;
  let pendingBreakKind = null;
  function clearPendingBreak() {
    pendingBreakSegmentIndex = -1;
    pendingBreakFitWidth = 0;
    pendingBreakPaintWidth = 0;
    pendingBreakKind = null;
  }
  function finishLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    if (!hasContent)
      return null;
    return {
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    };
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreakForWholeSegment(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    const fitAdvance = kinds[segmentIndex] === "tab" ? 0 : lineEndFitAdvances[segmentIndex];
    const paintAdvance = kinds[segmentIndex] === "tab" ? segmentWidth : lineEndPaintAdvances[segmentIndex];
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakFitWidth = lineW - segmentWidth + fitAdvance;
    pendingBreakPaintWidth = lineW - segmentWidth + paintAdvance;
    pendingBreakKind = kinds[segmentIndex];
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        return finishLine();
      }
      lineW += gw;
      lineEndSegmentIndex = segmentIndex;
      lineEndGraphemeIndex = g + 1;
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
    return null;
  }
  function maybeFinishAtSoftHyphen(segmentIndex) {
    if (pendingBreakKind !== "soft-hyphen" || pendingBreakSegmentIndex < 0)
      return null;
    const gWidths = breakableWidths[segmentIndex] ?? null;
    if (gWidths !== null) {
      const fitWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? breakablePrefixWidths[segmentIndex] ?? gWidths : gWidths;
      const usesPrefixWidths = fitWidths !== gWidths;
      const { fitCount, fittedWidth } = fitSoftHyphenBreak(fitWidths, lineW, maxWidth, lineFitEpsilon, discretionaryHyphenWidth, usesPrefixWidths);
      if (fitCount === gWidths.length) {
        lineW = fittedWidth;
        lineEndSegmentIndex = segmentIndex + 1;
        lineEndGraphemeIndex = 0;
        clearPendingBreak();
        return null;
      }
      if (fitCount > 0) {
        return finishLine(segmentIndex, fitCount, fittedWidth + discretionaryHyphenWidth);
      }
    }
    if (pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
      return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
    }
    return null;
  }
  for (let i = normalizedStart.segmentIndex; i < chunk.endSegmentIndex; i++) {
    const kind = kinds[i];
    const startGraphemeIndex = i === normalizedStart.segmentIndex ? normalizedStart.graphemeIndex : 0;
    const w = kind === "tab" ? getTabAdvance(lineW, tabStopAdvance) : widths[i];
    if (kind === "soft-hyphen" && startGraphemeIndex === 0) {
      if (hasContent) {
        lineEndSegmentIndex = i + 1;
        lineEndGraphemeIndex = 0;
        pendingBreakSegmentIndex = i + 1;
        pendingBreakFitWidth = lineW + discretionaryHyphenWidth;
        pendingBreakPaintWidth = lineW + discretionaryHyphenWidth;
        pendingBreakKind = kind;
      }
      continue;
    }
    if (!hasContent) {
      if (startGraphemeIndex > 0) {
        const line = appendBreakableSegmentFrom(i, startGraphemeIndex);
        if (line !== null)
          return line;
      } else if (w > maxWidth && breakableWidths[i] !== null) {
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreakForWholeSegment(i, w);
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      const currentBreakFitWidth = lineW + (kind === "tab" ? 0 : lineEndFitAdvances[i]);
      const currentBreakPaintWidth = lineW + (kind === "tab" ? w : lineEndPaintAdvances[i]);
      if (pendingBreakKind === "soft-hyphen" && engineProfile.preferEarlySoftHyphenBreak && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      const softBreakLine = maybeFinishAtSoftHyphen(i);
      if (softBreakLine !== null)
        return softBreakLine;
      if (canBreakAfter(kind) && currentBreakFitWidth <= maxWidth + lineFitEpsilon) {
        appendWholeSegment(i, w);
        return finishLine(i + 1, 0, currentBreakPaintWidth);
      }
      if (pendingBreakSegmentIndex >= 0 && pendingBreakFitWidth <= maxWidth + lineFitEpsilon) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        const currentLine = finishLine();
        if (currentLine !== null)
          return currentLine;
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      }
      return finishLine();
    }
    appendWholeSegment(i, w);
    updatePendingBreakForWholeSegment(i, w);
  }
  if (pendingBreakSegmentIndex === chunk.consumedEndSegmentIndex && lineEndGraphemeIndex === 0) {
    return finishLine(chunk.consumedEndSegmentIndex, 0, pendingBreakPaintWidth);
  }
  return finishLine(chunk.consumedEndSegmentIndex, 0, lineW);
}
function layoutNextLineRangeSimple(prepared, normalizedStart, maxWidth) {
  const { widths, kinds, breakableWidths, breakablePrefixWidths } = prepared;
  const engineProfile = getEngineProfile();
  const lineFitEpsilon = engineProfile.lineFitEpsilon;
  let lineW = 0;
  let hasContent = false;
  const lineStartSegmentIndex = normalizedStart.segmentIndex;
  const lineStartGraphemeIndex = normalizedStart.graphemeIndex;
  let lineEndSegmentIndex = lineStartSegmentIndex;
  let lineEndGraphemeIndex = lineStartGraphemeIndex;
  let pendingBreakSegmentIndex = -1;
  let pendingBreakPaintWidth = 0;
  function finishLine(endSegmentIndex = lineEndSegmentIndex, endGraphemeIndex = lineEndGraphemeIndex, width = lineW) {
    if (!hasContent)
      return null;
    return {
      startSegmentIndex: lineStartSegmentIndex,
      startGraphemeIndex: lineStartGraphemeIndex,
      endSegmentIndex,
      endGraphemeIndex,
      width
    };
  }
  function startLineAtSegment(segmentIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
    lineW = width;
  }
  function startLineAtGrapheme(segmentIndex, graphemeIndex, width) {
    hasContent = true;
    lineEndSegmentIndex = segmentIndex;
    lineEndGraphemeIndex = graphemeIndex + 1;
    lineW = width;
  }
  function appendWholeSegment(segmentIndex, width) {
    if (!hasContent) {
      startLineAtSegment(segmentIndex, width);
      return;
    }
    lineW += width;
    lineEndSegmentIndex = segmentIndex + 1;
    lineEndGraphemeIndex = 0;
  }
  function updatePendingBreak(segmentIndex, segmentWidth) {
    if (!canBreakAfter(kinds[segmentIndex]))
      return;
    pendingBreakSegmentIndex = segmentIndex + 1;
    pendingBreakPaintWidth = lineW - segmentWidth;
  }
  function appendBreakableSegmentFrom(segmentIndex, startGraphemeIndex) {
    const gWidths = breakableWidths[segmentIndex];
    const gPrefixWidths = breakablePrefixWidths[segmentIndex] ?? null;
    for (let g = startGraphemeIndex; g < gWidths.length; g++) {
      const gw = getBreakableAdvance(gWidths, gPrefixWidths, g, engineProfile.preferPrefixWidthsForBreakableRuns);
      if (!hasContent) {
        startLineAtGrapheme(segmentIndex, g, gw);
        continue;
      }
      if (lineW + gw > maxWidth + lineFitEpsilon) {
        return finishLine();
      }
      lineW += gw;
      lineEndSegmentIndex = segmentIndex;
      lineEndGraphemeIndex = g + 1;
    }
    if (hasContent && lineEndSegmentIndex === segmentIndex && lineEndGraphemeIndex === gWidths.length) {
      lineEndSegmentIndex = segmentIndex + 1;
      lineEndGraphemeIndex = 0;
    }
    return null;
  }
  for (let i = normalizedStart.segmentIndex; i < widths.length; i++) {
    const w = widths[i];
    const kind = kinds[i];
    const startGraphemeIndex = i === normalizedStart.segmentIndex ? normalizedStart.graphemeIndex : 0;
    if (!hasContent) {
      if (startGraphemeIndex > 0) {
        const line = appendBreakableSegmentFrom(i, startGraphemeIndex);
        if (line !== null)
          return line;
      } else if (w > maxWidth && breakableWidths[i] !== null) {
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      } else {
        startLineAtSegment(i, w);
      }
      updatePendingBreak(i, w);
      continue;
    }
    const newW = lineW + w;
    if (newW > maxWidth + lineFitEpsilon) {
      if (canBreakAfter(kind)) {
        appendWholeSegment(i, w);
        return finishLine(i + 1, 0, lineW - w);
      }
      if (pendingBreakSegmentIndex >= 0) {
        return finishLine(pendingBreakSegmentIndex, 0, pendingBreakPaintWidth);
      }
      if (w > maxWidth && breakableWidths[i] !== null) {
        const currentLine = finishLine();
        if (currentLine !== null)
          return currentLine;
        const line = appendBreakableSegmentFrom(i, 0);
        if (line !== null)
          return line;
      }
      return finishLine();
    }
    appendWholeSegment(i, w);
    updatePendingBreak(i, w);
  }
  return finishLine();
}

// node_modules/@chenglou/pretext/dist/layout.js
var sharedGraphemeSegmenter2 = null;
var sharedLineTextCaches = /* @__PURE__ */ new WeakMap();
function getSharedGraphemeSegmenter2() {
  if (sharedGraphemeSegmenter2 === null) {
    sharedGraphemeSegmenter2 = new Intl.Segmenter(void 0, { granularity: "grapheme" });
  }
  return sharedGraphemeSegmenter2;
}
function createEmptyPrepared(includeSegments) {
  if (includeSegments) {
    return {
      widths: [],
      lineEndFitAdvances: [],
      lineEndPaintAdvances: [],
      kinds: [],
      simpleLineWalkFastPath: true,
      segLevels: null,
      breakableWidths: [],
      breakablePrefixWidths: [],
      discretionaryHyphenWidth: 0,
      tabStopAdvance: 0,
      chunks: [],
      segments: []
    };
  }
  return {
    widths: [],
    lineEndFitAdvances: [],
    lineEndPaintAdvances: [],
    kinds: [],
    simpleLineWalkFastPath: true,
    segLevels: null,
    breakableWidths: [],
    breakablePrefixWidths: [],
    discretionaryHyphenWidth: 0,
    tabStopAdvance: 0,
    chunks: []
  };
}
function measureAnalysis(analysis, font, includeSegments) {
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  const engineProfile = getEngineProfile();
  const { cache, emojiCorrection } = getFontMeasurementState(font, textMayContainEmoji(analysis.normalized));
  const discretionaryHyphenWidth = getCorrectedSegmentWidth("-", getSegmentMetrics("-", cache), emojiCorrection);
  const spaceWidth = getCorrectedSegmentWidth(" ", getSegmentMetrics(" ", cache), emojiCorrection);
  const tabStopAdvance = spaceWidth * 8;
  if (analysis.len === 0)
    return createEmptyPrepared(includeSegments);
  const widths = [];
  const lineEndFitAdvances = [];
  const lineEndPaintAdvances = [];
  const kinds = [];
  let simpleLineWalkFastPath = analysis.chunks.length <= 1;
  const segStarts = includeSegments ? [] : null;
  const breakableWidths = [];
  const breakablePrefixWidths = [];
  const segments = includeSegments ? [] : null;
  const preparedStartByAnalysisIndex = Array.from({ length: analysis.len });
  const preparedEndByAnalysisIndex = Array.from({ length: analysis.len });
  function pushMeasuredSegment(text, width, lineEndFitAdvance, lineEndPaintAdvance, kind, start, breakable, breakablePrefix) {
    if (kind !== "text" && kind !== "space" && kind !== "zero-width-break") {
      simpleLineWalkFastPath = false;
    }
    widths.push(width);
    lineEndFitAdvances.push(lineEndFitAdvance);
    lineEndPaintAdvances.push(lineEndPaintAdvance);
    kinds.push(kind);
    segStarts?.push(start);
    breakableWidths.push(breakable);
    breakablePrefixWidths.push(breakablePrefix);
    if (segments !== null)
      segments.push(text);
  }
  for (let mi = 0; mi < analysis.len; mi++) {
    preparedStartByAnalysisIndex[mi] = widths.length;
    const segText = analysis.texts[mi];
    const segWordLike = analysis.isWordLike[mi];
    const segKind = analysis.kinds[mi];
    const segStart = analysis.starts[mi];
    if (segKind === "soft-hyphen") {
      pushMeasuredSegment(segText, 0, discretionaryHyphenWidth, discretionaryHyphenWidth, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "hard-break") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    if (segKind === "tab") {
      pushMeasuredSegment(segText, 0, 0, 0, segKind, segStart, null, null);
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const segMetrics = getSegmentMetrics(segText, cache);
    if (segKind === "text" && segMetrics.containsCJK) {
      let unitText = "";
      let unitStart = 0;
      for (const gs of graphemeSegmenter.segment(segText)) {
        const grapheme = gs.segment;
        if (unitText.length === 0) {
          unitText = grapheme;
          unitStart = gs.index;
          continue;
        }
        if (kinsokuEnd.has(unitText) || kinsokuStart.has(grapheme) || leftStickyPunctuation.has(grapheme) || engineProfile.carryCJKAfterClosingQuote && isCJK(grapheme) && endsWithClosingQuote(unitText)) {
          unitText += grapheme;
          continue;
        }
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
        unitText = grapheme;
        unitStart = gs.index;
      }
      if (unitText.length > 0) {
        const unitMetrics = getSegmentMetrics(unitText, cache);
        const w2 = getCorrectedSegmentWidth(unitText, unitMetrics, emojiCorrection);
        pushMeasuredSegment(unitText, w2, w2, w2, "text", segStart + unitStart, null, null);
      }
      preparedEndByAnalysisIndex[mi] = widths.length;
      continue;
    }
    const w = getCorrectedSegmentWidth(segText, segMetrics, emojiCorrection);
    const lineEndFitAdvance = segKind === "space" || segKind === "preserved-space" || segKind === "zero-width-break" ? 0 : w;
    const lineEndPaintAdvance = segKind === "space" || segKind === "zero-width-break" ? 0 : w;
    if (segWordLike && segText.length > 1) {
      const graphemeWidths = getSegmentGraphemeWidths(segText, segMetrics, cache, emojiCorrection);
      const graphemePrefixWidths = engineProfile.preferPrefixWidthsForBreakableRuns ? getSegmentGraphemePrefixWidths(segText, segMetrics, cache, emojiCorrection) : null;
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, graphemeWidths, graphemePrefixWidths);
    } else {
      pushMeasuredSegment(segText, w, lineEndFitAdvance, lineEndPaintAdvance, segKind, segStart, null, null);
    }
    preparedEndByAnalysisIndex[mi] = widths.length;
  }
  const chunks = mapAnalysisChunksToPreparedChunks(analysis.chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex);
  const segLevels = segStarts === null ? null : computeSegmentLevels(analysis.normalized, segStarts);
  if (segments !== null) {
    return {
      widths,
      lineEndFitAdvances,
      lineEndPaintAdvances,
      kinds,
      simpleLineWalkFastPath,
      segLevels,
      breakableWidths,
      breakablePrefixWidths,
      discretionaryHyphenWidth,
      tabStopAdvance,
      chunks,
      segments
    };
  }
  return {
    widths,
    lineEndFitAdvances,
    lineEndPaintAdvances,
    kinds,
    simpleLineWalkFastPath,
    segLevels,
    breakableWidths,
    breakablePrefixWidths,
    discretionaryHyphenWidth,
    tabStopAdvance,
    chunks
  };
}
function mapAnalysisChunksToPreparedChunks(chunks, preparedStartByAnalysisIndex, preparedEndByAnalysisIndex) {
  const preparedChunks = [];
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    const startSegmentIndex = chunk.startSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.startSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const endSegmentIndex = chunk.endSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.endSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    const consumedEndSegmentIndex = chunk.consumedEndSegmentIndex < preparedStartByAnalysisIndex.length ? preparedStartByAnalysisIndex[chunk.consumedEndSegmentIndex] : preparedEndByAnalysisIndex[preparedEndByAnalysisIndex.length - 1] ?? 0;
    preparedChunks.push({
      startSegmentIndex,
      endSegmentIndex,
      consumedEndSegmentIndex
    });
  }
  return preparedChunks;
}
function prepareInternal(text, font, includeSegments, options) {
  const analysis = analyzeText(text, getEngineProfile(), options?.whiteSpace);
  return measureAnalysis(analysis, font, includeSegments);
}
function prepareWithSegments(text, font, options) {
  return prepareInternal(text, font, true, options);
}
function getInternalPrepared(prepared) {
  return prepared;
}
function getSegmentGraphemes(segmentIndex, segments, cache) {
  let graphemes = cache.get(segmentIndex);
  if (graphemes !== void 0)
    return graphemes;
  graphemes = [];
  const graphemeSegmenter = getSharedGraphemeSegmenter2();
  for (const gs of graphemeSegmenter.segment(segments[segmentIndex])) {
    graphemes.push(gs.segment);
  }
  cache.set(segmentIndex, graphemes);
  return graphemes;
}
function getLineTextCache(prepared) {
  let cache = sharedLineTextCaches.get(prepared);
  if (cache !== void 0)
    return cache;
  cache = /* @__PURE__ */ new Map();
  sharedLineTextCaches.set(prepared, cache);
  return cache;
}
function lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex) {
  return endSegmentIndex > 0 && kinds[endSegmentIndex - 1] === "soft-hyphen" && !(startSegmentIndex === endSegmentIndex && startGraphemeIndex > 0);
}
function buildLineTextFromRange(segments, kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  let text = "";
  const endsWithDiscretionaryHyphen = lineHasDiscretionaryHyphen(kinds, startSegmentIndex, startGraphemeIndex, endSegmentIndex);
  for (let i = startSegmentIndex; i < endSegmentIndex; i++) {
    if (kinds[i] === "soft-hyphen" || kinds[i] === "hard-break")
      continue;
    if (i === startSegmentIndex && startGraphemeIndex > 0) {
      text += getSegmentGraphemes(i, segments, cache).slice(startGraphemeIndex).join("");
    } else {
      text += segments[i];
    }
  }
  if (endGraphemeIndex > 0) {
    if (endsWithDiscretionaryHyphen)
      text += "-";
    text += getSegmentGraphemes(endSegmentIndex, segments, cache).slice(startSegmentIndex === endSegmentIndex ? startGraphemeIndex : 0, endGraphemeIndex).join("");
  } else if (endsWithDiscretionaryHyphen) {
    text += "-";
  }
  return text;
}
function createLayoutLine(prepared, cache, width, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex) {
  return {
    text: buildLineTextFromRange(prepared.segments, prepared.kinds, cache, startSegmentIndex, startGraphemeIndex, endSegmentIndex, endGraphemeIndex),
    width,
    start: {
      segmentIndex: startSegmentIndex,
      graphemeIndex: startGraphemeIndex
    },
    end: {
      segmentIndex: endSegmentIndex,
      graphemeIndex: endGraphemeIndex
    }
  };
}
function materializeLayoutLine(prepared, cache, line) {
  return createLayoutLine(prepared, cache, line.width, line.startSegmentIndex, line.startGraphemeIndex, line.endSegmentIndex, line.endGraphemeIndex);
}
function toLayoutLineRange(line) {
  return {
    width: line.width,
    start: {
      segmentIndex: line.startSegmentIndex,
      graphemeIndex: line.startGraphemeIndex
    },
    end: {
      segmentIndex: line.endSegmentIndex,
      graphemeIndex: line.endGraphemeIndex
    }
  };
}
function stepLineRange(prepared, start, maxWidth) {
  const line = layoutNextLineRange(prepared, start, maxWidth);
  if (line === null)
    return null;
  return toLayoutLineRange(line);
}
function materializeLine(prepared, line) {
  return createLayoutLine(prepared, getLineTextCache(prepared), line.width, line.start.segmentIndex, line.start.graphemeIndex, line.end.segmentIndex, line.end.graphemeIndex);
}
function walkLineRanges(prepared, maxWidth, onLine) {
  if (prepared.widths.length === 0)
    return 0;
  return walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    onLine(toLayoutLineRange(line));
  });
}
function layoutNextLine(prepared, start, maxWidth) {
  const line = stepLineRange(prepared, start, maxWidth);
  if (line === null)
    return null;
  return materializeLine(prepared, line);
}
function layoutWithLines(prepared, maxWidth, lineHeight) {
  const lines = [];
  if (prepared.widths.length === 0)
    return { lineCount: 0, height: 0, lines };
  const graphemeCache = getLineTextCache(prepared);
  const lineCount = walkPreparedLines(getInternalPrepared(prepared), maxWidth, (line) => {
    lines.push(materializeLayoutLine(prepared, graphemeCache, line));
  });
  return { lineCount, height: lineCount * lineHeight, lines };
}

// main.js
var BODY_FONT = '16px "Noto Serif SC", "Playfair Display", Georgia, serif';
var BODY_LH = 28;
var HL_FAMILY = '"Playfair Display", "Noto Serif SC", serif';
var SUB_FONT = '300 14px "Inter", sans-serif';
var SUB_LH = 22;
var PQ_FONT = 'italic 17px "Playfair Display", serif';
var PQ_LH = 26;
var GUTTER = 48;
var COL_GAP = 44;
var DROP_CAP_LINES = 3;
var MIN_SLOT = 60;
var NARROW = 768;
var IMG_PAD = 16;
var BODY_FIXED_H = 1200;
var dragState = null;
var needsInit = true;
var images = [
  { x: 0, y: 0, w: 0, h: 0, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", cap: "\u963F\u5C14\u5351\u65AF\u5C71\u8109 \xB7 \u745E\u58EB" },
  { x: 0, y: 0, w: 0, h: 0, url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", cap: "\u6668\u96FE\u4E2D\u7684\u68EE\u6797 \xB7 \u632A\u5A01" },
  { x: 0, y: 0, w: 0, h: 0, url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80", cap: "\u6E56\u7554\u9EC4\u660F \xB7 \u65B0\u897F\u5170" }
];
var HL_TEXT = "The Art of Text & Image";
var SUB_TEXT = "Drag the images to see text reflow in real time \u2014 powered by Pretext";
var BODY = `\u6392\u7248\u662F\u4EBA\u7C7B\u6587\u660E\u4E2D\u6700\u53E4\u8001\u4E5F\u6700\u7CBE\u5999\u7684\u89C6\u89C9\u827A\u672F\u4E4B\u4E00\u3002\u4ECE\u516C\u5143\u524D\u4E09\u5343\u5E74\u7F8E\u7D22\u4E0D\u8FBE\u7C73\u4E9A\u7684\u6954\u5F62\u6587\u5B57\u6CE5\u677F\uFF0C\u5230\u4E2D\u4E16\u7EAA\u6B27\u6D32\u4FEE\u9053\u9662\u4E2D\u624B\u6284\u672C\u7684\u534E\u4E3D\u88C5\u9970\u5B57\u6BCD\uFF0C\u518D\u5230\u5341\u4E94\u4E16\u7EAA\u7EA6\u7FF0\u5185\u65AF\xB7\u53E4\u817E\u5821\u53D1\u660E\u7684\u6D3B\u5B57\u5370\u5237\u672F\uFF0C\u6587\u5B57\u7684\u6392\u5217\u4E0E\u5448\u73B0\u65B9\u5F0F\u59CB\u7EC8\u662F\u4EBA\u7C7B\u4F20\u9012\u77E5\u8BC6\u3001\u8868\u8FBE\u601D\u60F3\u7684\u6838\u5FC3\u8F7D\u4F53\u3002\u6BCF\u4E00\u4E2A\u65F6\u4EE3\u7684\u6392\u7248\u6280\u672F\u90FD\u6DF1\u523B\u5730\u5F71\u54CD\u4E86\u4FE1\u606F\u7684\u4F20\u64AD\u65B9\u5F0F\uFF0C\u8FDB\u800C\u5851\u9020\u4E86\u6587\u660E\u7684\u8D70\u5411\u3002

\u6D3B\u5B57\u5370\u5237\u672F\u7684\u53D1\u660E\u662F\u6392\u7248\u53F2\u4E0A\u6700\u5177\u9769\u547D\u6027\u7684\u65F6\u523B\u3002\u53E4\u817E\u5821\u4E0D\u4EC5\u521B\u9020\u4E86\u53EF\u91CD\u590D\u4F7F\u7528\u7684\u91D1\u5C5E\u6D3B\u5B57\uFF0C\u8FD8\u8BBE\u8BA1\u4E86\u4E00\u5957\u5B8C\u6574\u7684\u6392\u7248\u7CFB\u7EDF\u2014\u2014\u5305\u62EC\u5B57\u6A21\u3001\u94F8\u5B57\u673A\u3001\u6CB9\u58A8\u914D\u65B9\u548C\u5370\u5237\u673A\u3002\u4ED6\u7684\u56DB\u5341\u4E8C\u884C\u5723\u7ECF\u81F3\u4ECA\u4ECD\u88AB\u89C6\u4E3A\u6392\u7248\u827A\u672F\u7684\u5DC5\u5CF0\u4E4B\u4F5C\u3002\u6BCF\u4E00\u9875\u90FD\u7ECF\u8FC7\u7CBE\u5FC3\u8BBE\u8BA1\uFF0C\u884C\u8DDD\u5747\u5300\uFF0C\u5B57\u95F4\u8DDD\u548C\u8C10\uFF0C\u6587\u5B57\u5757\u5728\u9875\u9762\u4E0A\u5F62\u6210\u5B8C\u7F8E\u7684\u77E9\u5F62\u3002\u8FD9\u79CD\u5BF9\u89C6\u89C9\u79E9\u5E8F\u7684\u8FFD\u6C42\uFF0C\u5960\u5B9A\u4E86\u6B64\u540E\u4E94\u767E\u5E74\u897F\u65B9\u6392\u7248\u7684\u57FA\u672C\u8303\u5F0F\u3002

\u5341\u4E5D\u4E16\u7EAA\u5DE5\u4E1A\u9769\u547D\u5E26\u6765\u4E86\u673A\u68B0\u6392\u7248\u7684\u65F6\u4EE3\u3002\u83B1\u8BFA\u6392\u94F8\u673A\u548C\u83AB\u8BFA\u6392\u94F8\u673A\u7684\u53D1\u660E\u4F7F\u5F97\u6392\u7248\u901F\u5EA6\u63D0\u9AD8\u4E86\u6570\u5341\u500D\uFF0C\u62A5\u7EB8\u548C\u4E66\u7C4D\u7684\u4EA7\u91CF\u6025\u5267\u589E\u957F\u3002\u4F46\u673A\u68B0\u6392\u7248\u4E5F\u5E26\u6765\u4E86\u65B0\u7684\u6311\u6218\uFF1A\u5982\u4F55\u5728\u901F\u5EA6\u4E0E\u8D28\u91CF\u4E4B\u95F4\u53D6\u5F97\u5E73\u8861\uFF1F\u5982\u4F55\u5728\u6709\u9650\u7684\u7248\u9762\u7A7A\u95F4\u4E2D\u540C\u65F6\u5BB9\u7EB3\u6587\u5B57\u3001\u56FE\u7247\u3001\u5E7F\u544A\u548C\u6807\u9898\uFF1F\u8FD9\u4E9B\u95EE\u9898\u50AC\u751F\u4E86\u73B0\u4EE3\u7248\u9762\u8BBE\u8BA1\u7684\u6982\u5FF5\u3002

\u4E8C\u5341\u4E16\u7EAA\u4E2D\u53F6\uFF0C\u745E\u58EB\u56FD\u9645\u4E3B\u4E49\u98CE\u683C\u5C06\u6392\u7248\u63D0\u5347\u5230\u4E86\u4E00\u4E2A\u65B0\u7684\u9AD8\u5EA6\u3002\u4EE5\u9A6C\u514B\u65AF\xB7\u7C73\u4E01\u683C\u8BBE\u8BA1\u7684 Helvetica \u5B57\u4F53\u4E3A\u4EE3\u8868\uFF0C\u8FD9\u4E00\u8FD0\u52A8\u5F3A\u8C03\u7F51\u683C\u7CFB\u7EDF\u3001\u65E0\u886C\u7EBF\u5B57\u4F53\u548C\u6E05\u6670\u7684\u89C6\u89C9\u5C42\u6B21\u3002\u6392\u7248\u4E0D\u518D\u4EC5\u4EC5\u662F\u6587\u5B57\u7684\u6392\u5217\uFF0C\u800C\u6210\u4E3A\u4E00\u79CD\u72EC\u7ACB\u7684\u8BBE\u8BA1\u8BED\u8A00\u3002\u7EA6\u745F\u592B\xB7\u7A46\u52D2-\u5E03\u7F57\u514B\u66FC\u7684\u7F51\u683C\u7CFB\u7EDF\u7406\u8BBA\u81F3\u4ECA\u4ECD\u662F\u5E73\u9762\u8BBE\u8BA1\u6559\u80B2\u7684\u57FA\u77F3\u3002

\u7136\u800C\uFF0C\u5F53\u6392\u7248\u4ECE\u7EB8\u5F20\u8FC1\u79FB\u5230\u5C4F\u5E55\u65F6\uFF0C\u4E00\u5207\u90FD\u53D8\u4E86\u3002\u7F51\u9875\u6392\u7248\u7684\u5386\u53F2\u59CB\u4E8E\u4E00\u4E5D\u4E5D\u4E09\u5E74\uFF0C\u5F53\u8482\u59C6\xB7\u4F2F\u7EB3\u65AF-\u674E\u521B\u5EFA\u4E86\u7B2C\u4E00\u4E2A\u7F51\u9875\u6D4F\u89C8\u5668\u65F6\uFF0C\u6587\u672C\u53EA\u80FD\u4EE5\u5355\u4E00\u5B57\u4F53\u3001\u5355\u4E00\u5927\u5C0F\u3001\u4ECE\u5DE6\u5230\u53F3\u7EBF\u6027\u6392\u5217\u3002\u6CA1\u6709\u5B57\u4F53\u9009\u62E9\uFF0C\u6CA1\u6709\u884C\u8DDD\u63A7\u5236\uFF0C\u6CA1\u6709\u591A\u680F\u5E03\u5C40\u3002\u65E9\u671F\u7684\u7F51\u9875\u8BBE\u8BA1\u5E08\u4EEC\u4E0D\u5F97\u4E0D\u4F7F\u7528\u8868\u683C\u6807\u7B7E\u6765\u6A21\u62DF\u7248\u9762\u5E03\u5C40\u2014\u2014\u4E00\u79CD\u7B28\u62D9\u4F46\u6709\u6548\u7684\u6743\u5B9C\u4E4B\u8BA1\u3002

\u4E00\u4E5D\u4E5D\u516D\u5E74\uFF0CCSS \u7684\u8BDE\u751F\u4E3A\u7F51\u9875\u6392\u7248\u5E26\u6765\u4E86\u7B2C\u4E00\u7F15\u66D9\u5149\u3002\u8BBE\u8BA1\u5E08\u7EC8\u4E8E\u53EF\u4EE5\u63A7\u5236\u5B57\u4F53\u3001\u989C\u8272\u3001\u884C\u8DDD\u548C\u8FB9\u8DDD\u3002\u4F46 CSS \u7684\u6392\u7248\u80FD\u529B\u4E0E\u5370\u5237\u6392\u7248\u76F8\u6BD4\u4ECD\u7136\u539F\u59CB\u5F97\u4EE4\u4EBA\u6CAE\u4E27\u3002\u6587\u5B57\u53EA\u80FD\u5728\u77E9\u5F62\u76D2\u5B50\u4E2D\u6D41\u52A8\uFF0C\u65E0\u6CD5\u73AF\u7ED5\u4E0D\u89C4\u5219\u5F62\u72B6\uFF1B\u591A\u680F\u5E03\u5C40\u9700\u8981\u590D\u6742\u7684\u6D6E\u52A8\u548C\u6E05\u9664\u6280\u5DE7\uFF1B\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u7684\u6982\u5FF5\u5C1A\u672A\u8BDE\u751F\u3002

\u4E8C\u96F6\u4E00\u96F6\u5E74\u4EE3\uFF0CFlexbox \u548C Grid \u5E03\u5C40\u7684\u51FA\u73B0\u6781\u5927\u5730\u6539\u5584\u4E86\u7F51\u9875\u5E03\u5C40\u7684\u80FD\u529B\u3002\u8BBE\u8BA1\u5E08\u7EC8\u4E8E\u53EF\u4EE5\u521B\u5EFA\u590D\u6742\u7684\u591A\u680F\u5E03\u5C40\uFF0C\u800C\u4E0D\u9700\u8981\u4F9D\u8D56\u6D6E\u52A8\u548C\u5B9A\u4F4D\u7684\u9ED1\u9B54\u6CD5\u3002\u4F46\u5373\u4FBF\u5982\u6B64\uFF0C\u7F51\u9875\u6392\u7248\u4E0E\u5370\u5237\u6392\u7248\u4E4B\u95F4\u4ECD\u7136\u5B58\u5728\u4E00\u9053\u5DE8\u5927\u7684\u9E3F\u6C9F\uFF1A\u6587\u5B57\u65E0\u6CD5\u50CF\u6742\u5FD7\u4E2D\u90A3\u6837\u4F18\u96C5\u5730\u73AF\u7ED5\u56FE\u7247\u6D41\u52A8\u3002

CSS Shapes \u89C4\u8303\u5728\u4E8C\u96F6\u4E00\u56DB\u5E74\u88AB\u63D0\u51FA\uFF0C\u8BD5\u56FE\u5F25\u5408\u8FD9\u9053\u9E3F\u6C9F\u3002\u5B83\u5141\u8BB8\u6587\u5B57\u6CBF\u7740\u5B9A\u4E49\u7684\u5F62\u72B6\u6D41\u52A8\u3002\u7406\u8BBA\u4E0A\uFF0C\u8FD9\u5E94\u8BE5\u662F\u7F51\u9875\u6392\u7248\u7684\u91CD\u5927\u7A81\u7834\u3002\u4F46\u5728\u5B9E\u8DF5\u4E2D\uFF0CCSS Shapes \u7684\u9650\u5236\u4EE4\u4EBA\u5931\u671B\uFF1A\u5B83\u53EA\u80FD\u4E0E\u6D6E\u52A8\u5143\u7D20\u914D\u5408\u4F7F\u7528\uFF0C\u6587\u5B57\u53EA\u80FD\u5728\u5F62\u72B6\u7684\u4E00\u4FA7\u6D41\u52A8\uFF0C\u5F62\u72B6\u5FC5\u987B\u5728 CSS \u4E2D\u9759\u6001\u5B9A\u4E49\u2014\u2014\u4F60\u65E0\u6CD5\u52A8\u6001\u5730\u6539\u53D8\u5B83\uFF0C\u4E5F\u65E0\u6CD5\u83B7\u53D6\u6587\u5B57\u6D41\u52A8\u540E\u7684\u884C\u51E0\u4F55\u4FE1\u606F\u3002

\u66F4\u6839\u672C\u7684\u95EE\u9898\u5728\u4E8E\u6027\u80FD\u3002\u6D4F\u89C8\u5668\u7684\u6587\u672C\u5E03\u5C40\u5F15\u64CE\u662F\u4E00\u4E2A\u9ED1\u76D2\u3002\u5982\u679C\u4F60\u60F3\u77E5\u9053\u4E00\u6BB5\u6587\u5B57\u5728\u7ED9\u5B9A\u5BBD\u5EA6\u4E0B\u4F1A\u5360\u636E\u591A\u5C11\u884C\u3001\u603B\u9AD8\u5EA6\u662F\u591A\u5C11\uFF0C\u4F60\u5FC5\u987B\u5C06\u6587\u5B57\u6E32\u67D3\u5230 DOM \u4E2D\uFF0C\u7136\u540E\u901A\u8FC7 getBoundingClientRect \u6216 offsetHeight \u6765\u6D4B\u91CF\u3002\u6BCF\u4E00\u6B21\u6D4B\u91CF\u90FD\u4F1A\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u5E03\u5C40\u56DE\u6D41\u2014\u2014\u4E00\u4E2A\u4EE3\u4EF7\u6781\u5176\u9AD8\u6602\u7684\u64CD\u4F5C\u3002

\u5E03\u5C40\u56DE\u6D41\u610F\u5473\u7740\u6D4F\u89C8\u5668\u5FC5\u987B\u91CD\u65B0\u8BA1\u7B97\u9875\u9762\u4E0A\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684\u4F4D\u7F6E\u548C\u5927\u5C0F\u3002\u5F53\u4F60\u8FDE\u7EED\u6D4B\u91CF\u4E94\u767E\u4E2A\u6587\u672C\u5757\u65F6\uFF0C\u4F60\u5C31\u89E6\u53D1\u4E86\u4E94\u767E\u6B21\u5B8C\u6574\u7684\u5E03\u5C40\u56DE\u6D41\u3002\u5728\u590D\u6742\u7684\u9875\u9762\u4E0A\uFF0C\u6BCF\u6B21\u56DE\u6D41\u53EF\u80FD\u9700\u8981\u5341\u5230\u4E09\u5341\u6BEB\u79D2\u3002\u8FD9\u610F\u5473\u7740\u4EC5\u4EC5\u662F\u6D4B\u91CF\u6587\u672C\u9AD8\u5EA6\uFF0C\u5C31\u53EF\u80FD\u6D88\u8017\u6570\u79D2\u7684\u65F6\u95F4\u2014\u2014\u5BF9\u4E8E\u9700\u8981\u516D\u5341\u5E27\u6BCF\u79D2\u6D41\u7545\u5EA6\u7684\u73B0\u4EE3\u754C\u9762\u6765\u8BF4\uFF0C\u8FD9\u662F\u5B8C\u5168\u4E0D\u53EF\u63A5\u53D7\u7684\u3002

Pretext \u7684\u51FA\u73B0\u6539\u53D8\u4E86\u8FD9\u4E00\u5207\u3002\u5B83\u7684\u6838\u5FC3\u6D1E\u5BDF\u6781\u5176\u7B80\u5355\uFF1A\u6D4F\u89C8\u5668\u7684 Canvas API \u5305\u542B\u4E00\u4E2A measureText \u65B9\u6CD5\uFF0C\u5B83\u53EF\u4EE5\u8FD4\u56DE\u4EFB\u4F55\u5B57\u7B26\u4E32\u5728\u4EFB\u4F55\u5B57\u4F53\u4E0B\u7684\u5BBD\u5EA6\uFF0C\u800C\u4E0D\u89E6\u53D1\u5E03\u5C40\u56DE\u6D41\u3002Canvas \u6D4B\u91CF\u4F7F\u7528\u4E0E DOM \u6E32\u67D3\u76F8\u540C\u7684\u5B57\u4F53\u5F15\u64CE\u2014\u2014\u7ED3\u679C\u5B8C\u5168\u4E00\u81F4\u3002\u4F46\u56E0\u4E3A\u5B83\u5728\u5E03\u5C40\u6811\u4E4B\u5916\u8FD0\u884C\uFF0C\u6240\u4EE5\u6CA1\u6709\u56DE\u6D41\u4EE3\u4EF7\u3002

Pretext \u5229\u7528\u4E86\u8FD9\u79CD\u4E0D\u5BF9\u79F0\u6027\u3002\u5F53\u6587\u672C\u9996\u6B21\u51FA\u73B0\u65F6\uFF0CPretext \u901A\u8FC7 Canvas \u6D4B\u91CF\u6BCF\u4E2A\u8BCD\u7684\u5BBD\u5EA6\u5E76\u7F13\u5B58\u3002\u5728\u8FD9\u4E2A\u51C6\u5907\u9636\u6BB5\u4E4B\u540E\uFF0C\u5E03\u5C40\u5C31\u662F\u7EAF\u7CB9\u7684\u7B97\u672F\uFF1A\u904D\u5386\u7F13\u5B58\u7684\u5BBD\u5EA6\uFF0C\u8FFD\u8E2A\u5F53\u524D\u884C\u7684\u7D2F\u8BA1\u5BBD\u5EA6\uFF0C\u5F53\u5BBD\u5EA6\u8D85\u8FC7\u6700\u5927\u503C\u65F6\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u7136\u540E\u7D2F\u52A0\u884C\u9AD8\u3002\u6CA1\u6709 DOM\uFF0C\u6CA1\u6709\u56DE\u6D41\uFF0C\u6CA1\u6709\u5E03\u5C40\u6811\u8BBF\u95EE\u3002

\u6027\u80FD\u63D0\u5347\u4E0D\u662F\u6E10\u8FDB\u5F0F\u7684\uFF0C\u800C\u662F\u8D28\u7684\u98DE\u8DC3\u3002\u7528 DOM \u65B9\u6CD5\u6D4B\u91CF\u4E94\u767E\u4E2A\u6587\u672C\u5757\u9700\u8981\u5341\u4E94\u5230\u4E09\u5341\u6BEB\u79D2\uFF0C\u5E76\u89E6\u53D1\u4E94\u767E\u6B21\u5E03\u5C40\u56DE\u6D41\u3002\u7528 Pretext\uFF0C\u540C\u6837\u7684\u64CD\u4F5C\u53EA\u9700\u8981\u96F6\u70B9\u96F6\u4E94\u6BEB\u79D2\uFF0C\u96F6\u6B21\u56DE\u6D41\u3002\u8FD9\u662F\u4E09\u767E\u5230\u516D\u767E\u500D\u7684\u6027\u80FD\u63D0\u5347\u3002

\u6709\u4E86\u514D\u8D39\u7684\u6587\u672C\u6D4B\u91CF\u80FD\u529B\uFF0C\u4E00\u6574\u7C7B\u6B64\u524D\u4E0D\u5207\u5B9E\u9645\u7684\u754C\u9762\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u6587\u672C\u53EF\u4EE5\u73AF\u7ED5\u4EFB\u610F\u5F62\u72B6\u6D41\u52A8\u2014\u2014\u4E0D\u662F\u56E0\u4E3A\u6D4F\u89C8\u5668\u7684\u5E03\u5C40\u5F15\u64CE\u652F\u6301\u5B83\uFF0C\u800C\u662F\u56E0\u4E3A\u4F60\u76F4\u63A5\u63A7\u5236\u4E86\u884C\u5BBD\u3002\u5BF9\u4E8E\u6BCF\u4E00\u884C\u6587\u672C\uFF0C\u4F60\u8BA1\u7B97\u54EA\u4E9B\u6C34\u5E73\u533A\u95F4\u88AB\u969C\u788D\u7269\u906E\u6321\uFF0C\u4ECE\u53EF\u7528\u5BBD\u5EA6\u4E2D\u51CF\u53BB\u5B83\u4EEC\uFF0C\u7136\u540E\u5C06\u5269\u4F59\u5BBD\u5EA6\u4F20\u9012\u7ED9\u5E03\u5C40\u5F15\u64CE\u3002

\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u9875\u9762\u5C31\u662F\u4E00\u4E2A\u6D3B\u751F\u751F\u7684\u4F8B\u5B50\u3002\u8BD5\u7740\u62D6\u52A8\u9875\u9762\u4E0A\u7684\u56FE\u7247\u2014\u2014\u4F60\u4F1A\u770B\u5230\u6587\u5B57\u50CF\u6C34\u6D41\u4E00\u6837\u5B9E\u65F6\u5730\u5728\u56FE\u7247\u5468\u56F4\u91CD\u65B0\u6392\u5217\u3002\u6BCF\u4E00\u884C\u90FD\u7ECF\u8FC7\u7CBE\u786E\u8BA1\u7B97\uFF0C\u786E\u4FDD\u5728\u56FE\u7247\u4E24\u4FA7\u90FD\u80FD\u5B8C\u7F8E\u6392\u5217\u3002\u8FD9\u4E0D\u662F CSS \u7684 float \u6216 shape-outside\u2014\u2014\u8FD9\u662F\u7EAF\u7CB9\u7684 JavaScript \u7B97\u672F\uFF0C\u5728\u6BCF\u4E00\u5E27\u4E2D\u91CD\u65B0\u8BA1\u7B97\u6240\u6709\u884C\u7684\u4F4D\u7F6E\u548C\u5BBD\u5EA6\u3002

\u591A\u680F\u6587\u672C\u6D41\u52A8\u662F\u53E6\u4E00\u4E2A\u4EE4\u4EBA\u60CA\u53F9\u7684\u80FD\u529B\u3002\u5DE6\u680F\u6D88\u8017\u6587\u672C\u76F4\u5230\u5230\u8FBE\u5E95\u90E8\uFF0C\u7136\u540E\u5C06\u5149\u6807\u4F20\u9012\u7ED9\u53F3\u680F\u3002\u53F3\u680F\u4ECE\u5DE6\u680F\u505C\u6B62\u7684\u5730\u65B9\u7CBE\u786E\u63A5\u7EED\uFF0C\u6CA1\u6709\u91CD\u590D\uFF0C\u6CA1\u6709\u95F4\u9699\uFF0C\u5728\u680F\u8FB9\u754C\u5904\u5B8C\u7F8E\u65AD\u884C\u3002\u8FD9\u5C31\u662F\u62A5\u7EB8\u548C\u6742\u5FD7\u5728\u7EB8\u4E0A\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u4F46\u5728\u7F51\u9875\u4E0A\u4ECE\u672A\u771F\u6B63\u5B9E\u73B0\u8FC7\u2014\u2014\u76F4\u5230\u73B0\u5728\u3002

\u81EA\u9002\u5E94\u6807\u9898\u5C3A\u5BF8\u662F\u533A\u5206\u4E13\u4E1A\u6392\u7248\u548C\u4E1A\u4F59\u5E03\u5C40\u7684\u7EC6\u8282\u3002\u6807\u9898\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5927\uFF0C\u540C\u65F6\u4E0D\u8BA9\u4EFB\u4F55\u5355\u8BCD\u8DE8\u884C\u65AD\u5F00\u3002\u8FD9\u9700\u8981\u4E8C\u5206\u641C\u7D22\uFF1A\u5C1D\u8BD5\u4E00\u4E2A\u5B57\u53F7\uFF0C\u6D4B\u91CF\u6587\u672C\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u884C\u5185\u65AD\u8BCD\uFF0C\u7136\u540E\u8C03\u6574\u3002\u4F7F\u7528 DOM \u6D4B\u91CF\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u90FD\u9700\u8981\u4E00\u6B21\u56DE\u6D41\uFF1B\u4F7F\u7528 Pretext\uFF0C\u6BCF\u6B21\u8FED\u4EE3\u53EA\u662F\u4E00\u5FAE\u79D2\u7684\u7B97\u672F\u8FD0\u7B97\u3002

\u5F53\u6587\u672C\u6D4B\u91CF\u53D8\u5F97\u514D\u8D39\u65F6\uFF0C\u6587\u672C\u4FE1\u606F\u53D8\u5F97\u4E30\u5BCC\u800C\u5EC9\u4EF7\u3002\u4F60\u53EF\u4EE5\u5728\u8FC7\u53BB\u67E5\u8BE2\u4E00\u6B21\u7684\u65F6\u95F4\u91CC\uFF0C\u8BE2\u95EE\u6587\u672C\u5728\u4E00\u5343\u79CD\u4E0D\u540C\u5BBD\u5EA6\u4E0B\u7684\u5916\u89C2\u3002\u4F60\u53EF\u4EE5\u5728\u6BCF\u4E00\u5E27\u3001\u6BCF\u4E00\u6B21\u62D6\u62FD\u4E8B\u4EF6\u3001\u6BCF\u4E00\u50CF\u7D20\u7684\u7A97\u53E3\u8C03\u6574\u4E2D\u91CD\u65B0\u8BA1\u7B97\u6587\u672C\u5E03\u5C40\uFF0C\u800C\u4E0D\u5FC5\u62C5\u5FC3\u4EFB\u4F55\u6027\u80FD\u95EE\u9898\u3002

\u60F3\u8C61\u4E00\u4E2A\u6570\u636E\u53EF\u89C6\u5316\uFF0C\u5176\u4E2D\u6807\u7B7E\u968F\u7740\u7528\u6237\u7F29\u653E\u548C\u5E73\u79FB\u800C\u5728\u56FE\u8868\u5143\u7D20\u5468\u56F4\u91CD\u6392\u3002\u60F3\u8C61\u4E00\u4E2A\u534F\u4F5C\u6587\u6863\u7F16\u8F91\u5668\uFF0C\u5176\u4E2D\u6587\u5B57\u56F4\u7ED5\u5176\u4ED6\u7528\u6237\u653E\u7F6E\u7684\u5D4C\u5165\u5F0F\u5C0F\u90E8\u4EF6\u3001\u56FE\u7247\u548C\u6CE8\u91CA\u6D41\u52A8\uFF0C\u5E76\u5728\u4ED6\u4EEC\u79FB\u52A8\u4E1C\u897F\u65F6\u5B9E\u65F6\u66F4\u65B0\u3002\u60F3\u8C61\u4E00\u4E2A\u5730\u56FE\u5E94\u7528\uFF0C\u5176\u4E2D\u5730\u540D\u667A\u80FD\u5730\u73AF\u7ED5\u5730\u7406\u7279\u5F81\u800C\u4E0D\u662F\u91CD\u53E0\u5728\u5B83\u4EEC\u4E0A\u9762\u3002

\u5F00\u653E\u7684\u7F51\u7EDC\u503C\u5F97\u62E5\u6709\u4E0E\u5176\u96C4\u5FC3\u76F8\u5339\u914D\u7684\u6392\u7248\u80FD\u529B\u3002\u6211\u4EEC\u6784\u5EFA\u7684\u5E94\u7528\u5728\u6BCF\u4E00\u4E2A\u7EF4\u5EA6\u4E0A\u90FD\u53EF\u4EE5\u4E0E\u539F\u751F\u8F6F\u4EF6\u5AB2\u7F8E\uFF0C\u552F\u72EC\u6587\u672C\u9664\u5916\u3002\u6211\u4EEC\u7684\u52A8\u753B\u6D41\u7545\uFF0C\u4EA4\u4E92\u54CD\u5E94\u8FC5\u901F\uFF0C\u56FE\u5F62\u4EE4\u4EBA\u60CA\u53F9\u2014\u2014\u4F46\u6211\u4EEC\u7684\u6587\u5B57\u5750\u5728\u50F5\u786C\u7684\u76D2\u5B50\u91CC\uFF0C\u65E0\u6CD5\u73AF\u7ED5\u969C\u788D\u7269\u6D41\u52A8\uFF0C\u65E0\u6CD5\u9002\u5E94\u52A8\u6001\u5E03\u5C40\u3002

\u5F53\u6587\u672C\u6D4B\u91CF\u53D8\u5F97\u514D\u8D39\u65F6\uFF0C\u8FD9\u4E00\u5207\u90FD\u6539\u53D8\u4E86\u3002\u4E0D\u662F\u7565\u5FAE\u6539\u5584\u2014\u2014\u800C\u662F\u6839\u672C\u6027\u7684\u4E0D\u540C\u3002\u90A3\u4E9B\u66FE\u7ECF\u592A\u6602\u8D35\u800C\u65E0\u6CD5\u6784\u5EFA\u7684\u754C\u9762\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u90A3\u4E9B\u53EA\u5B58\u5728\u4E8E\u5370\u5237\u54C1\u4E2D\u7684\u5E03\u5C40\u53D8\u5F97\u53EF\u4EA4\u4E92\u3002\u90A3\u4E9B\u5750\u5728\u76D2\u5B50\u91CC\u7684\u6587\u5B57\u5F00\u59CB\u6D41\u52A8\u3002

\u7F51\u7EDC\u5DF2\u7ECF\u7B49\u5F85\u4E86\u4E09\u5341\u5E74\u3002\u4E00\u4E2A\u5341\u4E94\u5343\u5B57\u8282\u3001\u96F6\u4F9D\u8D56\u7684\u5E93\u5B9E\u73B0\u4E86\u5B83\u3002\u4E0D\u9700\u8981\u6D4F\u89C8\u5668 API \u53D8\u66F4\uFF0C\u4E0D\u9700\u8981\u89C4\u8303\u6D41\u7A0B\uFF0C\u4E0D\u9700\u8981\u591A\u5E74\u7684\u6807\u51C6\u5316\u65F6\u95F4\u7EBF\u3002\u53EA\u9700\u8981\u6570\u5B66\u3001\u7F13\u5B58\u7684\u6D4B\u91CF\u503C\uFF0C\u4EE5\u53CA\u4E00\u4E2A\u5927\u80C6\u7684\u95EE\u9898\uFF1A\u5982\u679C\u6211\u4EEC\u5E72\u8106\u4E0D\u518D\u95EE DOM \u5462\uFF1F\u5341\u4E94\u5343\u5B57\u8282\u3002\u96F6\u4F9D\u8D56\u3002\u96F6 DOM \u8BFB\u53D6\u3002\u6587\u5B57\u81EA\u7531\u6D41\u6DCC\u3002`;
var PQ_TEXT = '"\u5F53\u6587\u672C\u6D4B\u91CF\u53D8\u5F97\u514D\u8D39\u65F6\uFF0C\u90A3\u4E9B\u66FE\u7ECF\u592A\u6602\u8D35\u800C\u65E0\u6CD5\u6784\u5EFA\u7684\u754C\u9762\u53D8\u5F97\u8F7B\u800C\u6613\u4E3E\u3002\u90A3\u4E9B\u53EA\u5B58\u5728\u4E8E\u5370\u5237\u54C1\u4E2D\u7684\u5E03\u5C40\u53D8\u5F97\u53EF\u4EA4\u4E92\u3002"';
var stage = document.getElementById("canvas-stage");
var loading = document.getElementById("loading");
function carve(base, blocked) {
  let s = [base];
  for (const b of blocked) {
    const n = [];
    for (const sl of s) {
      if (b.right <= sl.left || b.left >= sl.right) {
        n.push(sl);
        continue;
      }
      if (b.left > sl.left) n.push({ left: sl.left, right: b.left });
      if (b.right < sl.right) n.push({ left: b.right, right: sl.right });
    }
    s = n;
  }
  return s.filter((x) => x.right - x.left >= MIN_SLOT);
}
function pool(arr, n, cls) {
  while (arr.length < n) {
    const e = document.createElement("div");
    e.className = cls;
    stage.appendChild(e);
    arr.push(e);
  }
  for (let i = 0; i < arr.length; i++) arr[i].style.display = i < n ? "" : "none";
}
var P = { body: [], hl: [], sub: [], pql: [], pqb: [], div: [] };
var imgEls = [];
var capEls = [];
for (const im of images) {
  const f = document.createElement("div");
  f.className = "image-frame";
  const ig = document.createElement("img");
  ig.src = im.url;
  ig.alt = im.cap;
  ig.draggable = false;
  f.appendChild(ig);
  stage.appendChild(f);
  imgEls.push(f);
  const c = document.createElement("div");
  c.className = "image-caption";
  c.textContent = im.cap;
  stage.appendChild(c);
  capEls.push(c);
}
stage.addEventListener("pointerdown", (e) => {
  for (let i = imgEls.length - 1; i >= 0; i--) {
    if (imgEls[i].style.display === "none") continue;
    const s = images[i];
    const mx = e.pageX, my = e.pageY;
    if (mx >= s.x && mx <= s.x + s.w && my >= s.y && my <= s.y + s.h) {
      e.preventDefault();
      dragState = { i, ox: mx - s.x, oy: my - s.y };
      imgEls[i].classList.add("dragging");
      document.body.style.cursor = "grabbing";
      return;
    }
  }
});
window.addEventListener("pointermove", (e) => {
  if (!dragState) return;
  e.preventDefault();
  images[dragState.i].x = e.pageX - dragState.ox;
  images[dragState.i].y = e.pageY - dragState.oy;
  render();
});
window.addEventListener("pointerup", () => {
  if (!dragState) return;
  imgEls[dragState.i].classList.remove("dragging");
  document.body.style.cursor = "";
  dragState = null;
});
var SAMPLE = "\u6392\u7248\u662F\u4EBA\u7C7B\u6587\u660E\u4E2D\u6700\u53E4\u8001\u4E5F\u6700\u7CBE\u5999\u7684\u89C6\u89C9\u827A\u672FABCDEFGabcdefg";
await Promise.all([
  document.fonts.load(`16px "Noto Serif SC"`, SAMPLE),
  document.fonts.load(`700 16px "Noto Serif SC"`, SAMPLE),
  document.fonts.load(`16px "Playfair Display"`, SAMPLE),
  document.fonts.load(`700 72px "Playfair Display"`, SAMPLE),
  document.fonts.load(`italic 17px "Playfair Display"`, SAMPLE),
  document.fonts.load(`300 14px "Inter"`, SAMPLE)
]);
await document.fonts.ready;
await new Promise((r) => requestAnimationFrame(r));
loading.style.display = "none";
var BODY_REST = BODY.slice(1);
var prepBody = prepareWithSegments(BODY_REST, BODY_FONT);
var prepPQ = prepareWithSegments(PQ_TEXT, PQ_FONT);
var DC_SZ = BODY_LH * DROP_CAP_LINES - 4;
var DC_FONT = `700 ${DC_SZ}px "Playfair Display", serif`;
var DC_CH = BODY[0];
var dcW = 0;
walkLineRanges(prepareWithSegments(DC_CH, DC_FONT), 9999, (l) => {
  dcW = l.width;
});
dcW = Math.ceil(dcW) + 12;
var dcEl = document.createElement("div");
dcEl.className = "drop-cap";
dcEl.textContent = DC_CH;
dcEl.style.font = DC_FONT;
dcEl.style.lineHeight = DC_SZ + "px";
stage.appendChild(dcEl);
function fitHL(maxW, maxH, maxSz = 72) {
  let lo = 20, hi = maxSz, best = lo, bLines = [];
  while (lo <= hi) {
    const sz = lo + hi >> 1, font = `700 ${sz}px ${HL_FAMILY}`, lh = Math.round(sz * 1.1);
    const p = prepareWithSegments(HL_TEXT, font);
    let brk = false, lc = 0;
    walkLineRanges(p, maxW, (l) => {
      lc++;
      if (l.end.graphemeIndex !== 0) brk = true;
    });
    if (!brk && lc * lh <= maxH) {
      best = sz;
      const r = layoutWithLines(p, maxW, lh);
      bLines = r.lines.map((l, i) => ({ x: 0, y: i * lh, text: l.text, w: l.width }));
      lo = sz + 1;
    } else hi = sz - 1;
  }
  return { sz: best, lines: bLines };
}
function layCol(prep, cur, rx, ry, rw, rh, lh, obs) {
  let c = cur, top = ry, lines = [], done = false;
  while (top + lh <= ry + rh && !done) {
    const bt = top, bb = top + lh, blk = [];
    for (const o of obs) {
      if (bb <= o.y || bt >= o.y + o.h) continue;
      blk.push({ left: o.x, right: o.x + o.w });
    }
    const slots = carve({ left: rx, right: rx + rw }, blk);
    if (!slots.length) {
      top += lh;
      continue;
    }
    slots.sort((a, b) => a.left - b.left);
    for (const s of slots) {
      const ln = layoutNextLine(prep, c, s.right - s.left);
      if (!ln) {
        done = true;
        break;
      }
      lines.push({ x: Math.round(s.left), y: Math.round(top), text: ln.text, w: ln.width });
      c = ln.end;
    }
    top += lh;
  }
  return { lines, cursor: c };
}
function render() {
  const pw = document.documentElement.clientWidth;
  const narrow = pw < NARROW;
  const gut = narrow ? 20 : GUTTER;
  const gap = narrow ? 0 : COL_GAP;
  const hlMW = Math.min(pw - gut * 2, 860);
  const { sz: hlSz, lines: hlL } = fitHL(hlMW, narrow ? 70 : 120, narrow ? 30 : 64);
  const hlLH = Math.round(hlSz * 1.1), hlFont = `700 ${hlSz}px ${HL_FAMILY}`;
  const hlH = hlL.length * hlLH;
  const subP = prepareWithSegments(SUB_TEXT, SUB_FONT);
  const subR = layoutWithLines(subP, hlMW, SUB_LH);
  const subL = subR.lines.map((l, i) => ({ x: 0, y: i * SUB_LH, text: l.text, w: l.width }));
  const subH = subL.length * SUB_LH;
  const divY = gut + hlH + 10 + subH + 14;
  const bodyTop = Math.round(divY + 24);
  const bodyH = BODY_FIXED_H;
  const cols = pw > 960 ? 2 : 1;
  const totG = gut * 2 + gap * (cols - 1);
  const maxCW = Math.min(pw, 1200);
  const colW = Math.floor((maxCW - totG) / cols);
  const cL = Math.round((pw - (cols * colW + (cols - 1) * gap)) / 2);
  if (needsInit) {
    const cfgs = [
      { col: 0, yF: 0.08, wF: 0.44, side: "right" },
      { col: cols > 1 ? 1 : 0, yF: 0.03, wF: 0.4, side: "left" },
      { col: cols > 1 ? 1 : 0, yF: 0.38, wF: 0.38, side: "right" }
    ];
    for (let i = 0; i < images.length; i++) {
      const cfg = cfgs[i], ci = Math.min(cfg.col, cols - 1);
      const cx = cL + ci * (colW + gap);
      const iw = Math.round(colW * cfg.wF), ih = Math.round(iw * 0.62);
      images[i].x = cfg.side === "right" ? cx + colW - iw : cx;
      images[i].y = Math.round(bodyTop + bodyH * cfg.yF);
      images[i].w = iw;
      images[i].h = ih;
    }
    needsInit = false;
  }
  const obs = [];
  const nImg = narrow ? 1 : images.length;
  for (let i = 0; i < nImg; i++) {
    const s = images[i];
    imgEls[i].style.display = "";
    imgEls[i].style.left = s.x + "px";
    imgEls[i].style.top = s.y + "px";
    imgEls[i].style.width = s.w + "px";
    imgEls[i].style.height = s.h + "px";
    imgEls[i].style.zIndex = "5";
    capEls[i].style.display = "";
    capEls[i].style.left = s.x + "px";
    capEls[i].style.top = s.y + s.h + 5 + "px";
    obs.push({ x: s.x - IMG_PAD, y: s.y - IMG_PAD, w: s.w + IMG_PAD * 2, h: s.h + 24 + IMG_PAD * 2 });
  }
  for (let i = nImg; i < images.length; i++) {
    imgEls[i].style.display = "none";
    capEls[i].style.display = "none";
  }
  let pqR = null, pqL = [];
  if (!narrow && cols >= 2) {
    const pqW = Math.round(colW * 0.48);
    const r = layoutWithLines(prepPQ, pqW - 22, PQ_LH);
    const pH = r.lines.length * PQ_LH + 16, pqX = cL, pqY = Math.round(bodyTop + bodyH * 0.55);
    pqL = r.lines.map((l, i) => ({ x: pqX + 22, y: pqY + 8 + i * PQ_LH, text: l.text, w: l.width }));
    pqR = { x: pqX, y: pqY, w: pqW, h: pH };
    obs.push(pqR);
  }
  const dcR = { x: cL - 2, y: bodyTop - 2, w: dcW, h: DROP_CAP_LINES * BODY_LH + 2 };
  const allL = [];
  let cur = { segmentIndex: 0, graphemeIndex: 0 };
  for (let ci = 0; ci < cols; ci++) {
    const cx = cL + ci * (colW + gap), cR2 = cx + colW;
    const rects = [];
    if (ci === 0) rects.push(dcR);
    for (const o of obs) {
      if (o.x + o.w > cx && o.x < cR2) rects.push(o);
    }
    const res = layCol(prepBody, cur, cx, bodyTop, colW, bodyH, BODY_LH, rects);
    allL.push(...res.lines);
    cur = res.cursor;
  }
  let maxY = bodyTop + bodyH;
  for (const l of allL) {
    const b = l.y + BODY_LH;
    if (b > maxY) maxY = b;
  }
  stage.style.height = maxY + 40 + "px";
  pool(P.hl, hlL.length, "headline-line");
  for (let i = 0; i < hlL.length; i++) {
    const e = P.hl[i], l = hlL[i];
    e.textContent = l.text;
    e.style.left = gut + "px";
    e.style.top = gut + l.y + "px";
    e.style.font = hlFont;
    e.style.lineHeight = hlLH + "px";
  }
  pool(P.sub, subL.length, "subtitle-line");
  for (let i = 0; i < subL.length; i++) {
    const e = P.sub[i], l = subL[i];
    e.textContent = l.text;
    e.style.left = gut + "px";
    e.style.top = gut + hlH + 10 + l.y + "px";
    e.style.font = SUB_FONT;
    e.style.lineHeight = SUB_LH + "px";
  }
  pool(P.div, 1, "divider");
  P.div[0].style.left = gut + "px";
  P.div[0].style.top = Math.round(divY) + "px";
  P.div[0].style.width = pw - gut * 2 + "px";
  dcEl.style.left = cL + "px";
  dcEl.style.top = bodyTop + "px";
  pool(P.body, allL.length, "text-line");
  for (let i = 0; i < allL.length; i++) {
    const e = P.body[i], l = allL[i];
    e.textContent = l.text;
    e.style.left = l.x + "px";
    e.style.top = l.y + "px";
    e.style.font = BODY_FONT;
    e.style.lineHeight = BODY_LH + "px";
  }
  if (pqR) {
    pool(P.pqb, 1, "pullquote-box");
    P.pqb[0].style.left = pqR.x + "px";
    P.pqb[0].style.top = pqR.y + "px";
    P.pqb[0].style.width = pqR.w + "px";
    P.pqb[0].style.height = pqR.h + "px";
    pool(P.pql, pqL.length, "pullquote-line");
    for (let i = 0; i < pqL.length; i++) {
      const e = P.pql[i], l = pqL[i];
      e.textContent = l.text;
      e.style.left = l.x + "px";
      e.style.top = l.y + "px";
      e.style.font = PQ_FONT;
      e.style.lineHeight = PQ_LH + "px";
    }
  } else {
    pool(P.pqb, 0, "pullquote-box");
    pool(P.pql, 0, "pullquote-line");
  }
}
render();
window.addEventListener("resize", () => {
  needsInit = true;
  render();
});
