import { Stack } from "@mui/material";
import {
  innerPlanet1Orbit,
  mainAxisPlanetOrbit,
  middlePlanet1Orbit,
  middlePlanet2Orbit,
  middlePlanet4Orbit,
  middlePlanet5Orbit,
  orbitSpin,
  outerPlanet1Orbit,
  outerPlanet2Orbit,
  outerPlanet3Orbit,
  outerPlanet4Orbit,
} from "../../utils/keyframes";

const Orbit = () => {
  return (
    <Stack
      sx={{
        width: "min(100%, 620px)",
        aspectRatio: "1 / 1",
        "@media (max-width: 100rem)": {
          width: "min(100%, 480px)",
        },
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          width: "100%",
          height: "100%",
          display: "grid",
          gridTemplateRows: "100%",
          gridTemplateColumns: "100%",
          alignItems: "center",
          justifyItems: "center",
          ".planet": {
            boxShadow: "0px 0px 20px 6px rgba(79, 161, 255, .7)",
            borderRadius: "50%",
            position: "absolute",
          },
        }}
      >
        {/* 1 */}
        <Stack
          sx={{
            width: "22.582%",
            height: "22.582%",
            borderRadius: "50%",
            gridRow: 1,
            gridColumn: 1,
            position: "relative",
            animation: `${orbitSpin} 30s linear infinite`,
          }}
        >
          <Stack
            className="planet"
            component="img"
            src={"/orbit/c-sharp.png"}
            alt="c-sharp"
            sx={{
              width: "42.858%",
              height: "42.858%",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              animation: `${mainAxisPlanetOrbit} 30s linear infinite`,
              background: "#a700aa",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/java.png"}
            alt="java"
            sx={{
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              animation: `${mainAxisPlanetOrbit} 30s linear infinite`,

              width: "42.858%",
              height: "42.858%",
              backgroundColor: "#fff",
            }}
          />
        </Stack>

        {/* 2 */}
        <Stack
          sx={{
            width: "38.71%",
            height: "38.71%",
            border: "2px solid rgba(60, 60, 60, .45)",
            animation: `${orbitSpin} 60s linear infinite`,
            borderRadius: "50%",
            gridRow: 1,
            gridColumn: 1,
            position: "relative",
          }}
        >
          <Stack
            className="planet"
            component="img"
            src={"/orbit/react.png"}
            alt="react"
            sx={{
              width: "25.425%",
              height: "25.425%",
              bottom: 0,
              transformOrigin: "center",
              transform: "translate(-50%, 50%)",
              animation: `${innerPlanet1Orbit} 60s linear infinite`,
              background: "#000",
            }}
          />
        </Stack>

        {/* 3 */}
        <Stack
          sx={{
            width: "64.517%",
            height: "64.517%",
            border: "2px solid rgba(60, 60, 60, 0.35)",
            animation: `${orbitSpin} 90s linear infinite`,
            borderRadius: "50%",
            gridRow: 1,
            gridColumn: 1,
            position: "relative",
          }}
        >
          <Stack
            className="planet"
            component="img"
            src={"/orbit/swift.png"}
            alt="swift"
            sx={{
              top: "0",
              right: "20%",
              transformOrigin: "center",
              transform: "translate(-20%, -20%)",
              backgroundColor: "#fff",
              animation: `${middlePlanet1Orbit} 90s linear infinite`,
              width: "15.152%",
              height: "15.152%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/node.png"}
            alt="node"
            sx={{
              top: "50%",
              right: "0",
              transformOrigin: "center",
              transform: "translate(50%, -50%)",
              backgroundColor: "#fff",
              animation: `${middlePlanet2Orbit} 90s linear infinite`,
              width: "15.152%",
              height: "15.152%",
              borderRadius: "50%",
              position: "absolute",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/github.png"}
            alt="github"
            sx={{
              bottom: "0",
              left: "0",
              transformOrigin: "center",
              transform: "translate(50%, -50%)",
              backgroundColor: "#fff",
              animation: `${middlePlanet2Orbit} 90s linear infinite`,
              width: "15.152%",
              height: "15.152%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/html-5.png"}
            alt="html-5"
            sx={{
              top: "20%",
              left: "0",
              transformOrigin: "center",
              transform: "translate(0, -20%)",
              backgroundColor: "#fff",
              animation: `${middlePlanet4Orbit} 90s linear infinite`,
              width: "15.152%",
              height: "15.152%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/angular.png"}
            alt="angular"
            sx={{
              top: "0",
              left: "20%",
              transformOrigin: "center",
              transform: "translate(20%, -20%)",
              background: "#565555",
              animation: `${middlePlanet5Orbit} 90s linear infinite`,
              width: "15.152%",
              height: "15.152%",
            }}
          />
        </Stack>

        {/* 4 */}
        <Stack
          sx={{
            width: "90.323%",
            height: "90.323%",
            border: "2px solid rgba(60, 60, 60, 0.25)",
            animation: `${orbitSpin} 120s linear infinite`,
            borderRadius: "50%",
            gridRow: 1,
            gridColumn: 1,
            position: "relative",
          }}
        >
          <Stack
            className="planet"
            component="img"
            src={"/orbit/postgresql.png"}
            alt="postgresql"
            sx={{
              top: "20%",
              right: "0",
              transformOrigin: "center",
              transform: "translate(0%, 20%)",
              backgroundColor: "#017acb",
              animation: `${outerPlanet1Orbit} 120s linear infinite`,
              width: "10.792%",
              height: "10.792%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/ts.png"}
            alt="ts"
            sx={{
              bottom: "20%",
              right: "0",
              transformOrigin: "center",
              transform: "translate(0%, -20%)",
              backgroundColor: "#fff",
              animation: `${outerPlanet2Orbit} 120s linear infinite`,
              width: "10.792%",
              height: "10.792%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/javascript.png"}
            alt="javascript"
            sx={{
              bottom: "0",
              left: "50%",
              transformOrigin: "center",
              transform: "translate(-50%, 50%)",
              backgroundColor: "#f7df1e",
              animation: `${outerPlanet3Orbit} 120s linear infinite`,
              width: "10.792%",
              height: "10.792%",
            }}
          />
          <Stack
            className="planet"
            component="img"
            src={"/orbit/docker.png"}
            alt="docker"
            sx={{
              bottom: "40%",
              left: "0",
              transformOrigin: "center",
              transform: "translate(-40%, 40%)",
              backgroundColor: "#222",
              animation: `${outerPlanet4Orbit} 120s linear infinite`,
              width: "10.792%",
              height: "10.792%",
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Orbit;
