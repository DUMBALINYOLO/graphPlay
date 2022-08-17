import React, { useState } from "react";
import "./styles.css";
import * as Tone from "tone";
import Graph from "./Graph";

export default function App() {
  // const assetList = {
  //   assets: [
  //     {
  //       guid: "loop01",
  //       name: "Fiction",
  //       volume: -21,
  //       url: "https://f.4bars.media/6E/52/6E52A9C1F2DD41ABA6397F82CD3C619B.ogg",
  //       posStart: "0:0:0",
  //       posEnd: "4:0:0"
  //     },
  //     {
  //       guid: "loop02",
  //       name: "Fact",
  //       volume: -33,
  //       url: "https://f.4bars.media/C1/1C/C11C71DBF1CF40FE85CF1044515F115C.ogg",
  //       posStart: "0:0:0",
  //       posEnd: "4:0:0"
  //     },
  //     {
  //       guid: "loop03",
  //       name: "Stranger",
  //       volume: -36,
  //       url: "https://f.4bars.media/E8/F1/E8F1E4E304334B5580D23F9CCC376278.ogg",
  //       posStart: "0:0:0",
  //       posEnd: "4:0:0"
  //     },
  //     {
  //       guid: "loop04",
  //       name: "Dream",
  //       volume: -24,
  //       url: "https://f.4bars.media/2A/EB/2AEBDC8619BF411A900EDFF406103150.ogg",
  //       posStart: "0:0:0",
  //       posEnd: "4:0:0"
  //     }
  //   ]
  // };

  // Tone.Transport.timeSignature = [4, 4];
  // Tone.Transport.bpm.value = 126.25;
  // Tone.Transport.loop = true;
  // Tone.Transport.loopStart = "0:0:0";
  // Tone.Transport.loopEnd = "1:0:0";
  // console.log("BPM: " + Tone.Transport.bpm.value); //float example

  // const players = new Tone.Players();
  // for (const [index, asset] of Object.entries(assetList.assets)) {
  //   const player = new Tone.Player(asset.url, function() {
  //     console.log("LOADED: " + asset.guid);
  //   });
  //   player.name = asset.guid;
  //   player.loopStart = asset.posStart;
  //   player.loopEnd = asset.posEnd;
  //   player.volume.value = asset.volume;
  //   players.add(player);
  //   player.toDestination().sync();
  //   player.start();
  // }

  // const onPlayClick = () => {
  //   Tone.start();
  //   Tone.Transport.start();
  // };

  return (
    <div className="App">
      {/* <h1>tone@next</h1>
      <h2>Multi-Loop Transport Test</h2>
      <button onClick={onPlayClick}>Transport.Start</button>
      <p>refresh to stop</p> */}
      <Graph />
    </div>
  );
}
