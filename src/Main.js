"use strict";

function TranslationCubeValue() {
    var r_x = document.getElementById('translation cube x range');
    var r_y = document.getElementById('translation cube y range');
    var r_z = document.getElementById('translation cube z range');
    var i_x = document.getElementById('translation cube x text');
    var i_y = document.getElementById('translation cube y text');
    var i_z = document.getElementById('translation cube z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function TranslationConeValue() {
    var r_x = document.getElementById('translation cone x range');
    var r_y = document.getElementById('translation cone y range');
    var r_z = document.getElementById('translation cone z range');
    var i_x = document.getElementById('translation cone x text');
    var i_y = document.getElementById('translation cone y text');
    var i_z = document.getElementById('translation cone z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function TranslationSphereValue() {
    var r_x = document.getElementById('translation sphere x range');
    var r_y = document.getElementById('translation sphere y range');
    var r_z = document.getElementById('translation sphere z range');
    var i_x = document.getElementById('translation sphere x text');
    var i_y = document.getElementById('translation sphere y text');
    var i_z = document.getElementById('translation sphere z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function RotationCubeValue() {
    var r_x = document.getElementById('rotation cube x range');
    var r_y = document.getElementById('rotation cube y range');
    var r_z = document.getElementById('rotation cube z range');
    var i_x = document.getElementById('rotation cube x text');
    var i_y = document.getElementById('rotation cube y text');
    var i_z = document.getElementById('rotation cube z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function RotationConeValue() {
    var r_x = document.getElementById('rotation cone x range');
    var r_y = document.getElementById('rotation cone y range');
    var r_z = document.getElementById('rotation cone z range');
    var i_x = document.getElementById('rotation cone x text');
    var i_y = document.getElementById('rotation cone y text');
    var i_z = document.getElementById('rotation cone z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function RotationSphereValue() {
    var r_x = document.getElementById('rotation sphere x range');
    var r_y = document.getElementById('rotation sphere y range');
    var r_z = document.getElementById('rotation sphere z range');
    var i_x = document.getElementById('rotation sphere x text');
    var i_y = document.getElementById('rotation sphere y text');
    var i_z = document.getElementById('rotation sphere z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [i_x.value, i_y.value, i_z.value];
}

function ScalingCubeValue() {
    var r = document.getElementById('scaling cube range');
    var i = document.getElementById('scaling cube text');
    i.value = r.value;
    return i.value;
}

function ScalingConeValue() {
    var r = document.getElementById('scaling cone range');
    var i = document.getElementById('scaling cone text');
    i.value = r.value;
    return i.value;
}

function ScalingSphereValue() {
    var r = document.getElementById('scaling sphere range');
    var i = document.getElementById('scaling sphere text');
    i.value = r.value;
    return i.value;
}

function AddElementCubeButton() {
    var sign = document.getElementById('add cube')
    if (sign.value == " + ") {
        sign.value = " - ";
        return ;
    }
        sign.value = " + ";
}

function AddElementCube() {
    var sign = document.getElementById('add cube')
    if (sign.value == " + ") {
        return false;
    }
        return true;
}

function AddElementConeButton() {
    var sign = document.getElementById('add cone')
    if (sign.value == " + ") {
        sign.value = " - ";
        return ;
    }
        sign.value = " + ";
}

function AddElementCone() {
    var sign = document.getElementById('add cone')
    if (sign.value == " + ") {
        return false;
    }
        return true;
}

function AddElementSphereButton() {
    var sign = document.getElementById('add sphere')
    if (sign.value == " + ") {
        sign.value = " - ";
        return ;
    }
        sign.value = " + ";
}

function AddElementSphere() {
    var sign = document.getElementById('add sphere')
    if (sign.value == " + ") {
        return false;
    }
        return true;
}

function zNearCameraValue() {
    var r = document.getElementById('zNear range');
    var i = document.getElementById('zNear text');
    i.value = r.value;
    return parseFloat(i.value);
}

function zFarCameraValue() {
    var r = document.getElementById('zFar range');
    var i = document.getElementById('zFar text');
    i.value = r.value;
    return parseFloat(i.value);
}

function FOVCameraValue() {
    var r = document.getElementById('FOV range');
    var i = document.getElementById('FOV text');
    i.value = r.value;
    return parseFloat(i.value);
}

function TranslationCameraValue() {
    var r_x = document.getElementById('translation camera x range');
    var r_y = document.getElementById('translation camera y range');
    var r_z = document.getElementById('translation camera z range');
    var i_x = document.getElementById('translation camera x text');
    var i_y = document.getElementById('translation camera y text');
    var i_z = document.getElementById('translation camera z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [parseFloat(i_x.value), parseFloat(i_y.value), parseFloat(i_z.value)];
}

function RotationCameraValue() {
    var r_x = document.getElementById('rotation camera x range');
    var r_y = document.getElementById('rotation camera y range');
    var r_z = document.getElementById('rotation camera z range');
    var i_x = document.getElementById('rotation camera x text');
    var i_y = document.getElementById('rotation camera y text');
    var i_z = document.getElementById('rotation camera z text');
    i_x.value = r_x.value;
    i_y.value = r_y.value;
    i_z.value = r_z.value;
    return [parseFloat(i_x.value), parseFloat(i_y.value), parseFloat(i_z.value)];
}


function CreateCubeInfo(gl, programInfo, color, translation) {
    var object = {
        programInfo: programInfo,
        bufferInfo: primitives.createCubeWithVertexColorsBufferInfo(gl, 20),
        uniforms: {
            u_colorMult: color,
            u_matrix: m4.identity(),
        },
        translation: translation,
        shouldBeDrawn: AddElementCube()
    };
    return object;
}

function CreateConeInfo(gl, programInfo, color, translation) {
    var object = {
        programInfo: programInfo,
        bufferInfo: primitives.createTruncatedConeWithVertexColorsBufferInfo(gl, 10, 0, 20, 20, 1, true, false),
        uniforms: {
            u_colorMult: color,
            u_matrix: m4.identity(),
        },
        translation: translation,
        shouldBeDrawn: AddElementCone()
    };
    return object;
}

function CreateSphereInfo(gl, programInfo, color, translation) {
    var object = {
        programInfo: programInfo,
        bufferInfo: primitives.createSphereWithVertexColorsBufferInfo(gl, 10, 20, 10),

        uniforms: {
            u_colorMult: color,
            u_matrix: m4.identity(),
        },
        translation: translation,
        shouldBeDrawn: AddElementSphere()
    };

    return object;
}

function CameraInitialize() {
    var camera = {
        zNear: 1,
        zFar: 2000,
        fov: 60,
        position: [0, 0, 100],
        rotation: [0, 0, 0],
        targetSub: [0, 0, -100],
        //target: [0, 0, 0],
        up: new v3(0, 1, 0)
    }
    return camera
}

function CameraUpdateValues(camera) {
    camera.zNear = zNearCameraValue();
    camera.zFar = zFarCameraValue();
    camera.fov = FOVCameraValue();
    camera.position = TranslationCameraValue();
    camera.rotation = RotationCameraValue();
    return camera;
}

function CalculateCamera(gl, camera, degToRad) {
    const fov = camera.fov * degToRad;
    const cPosition = new v3(camera.position[0], camera.position[1], camera.position[2]);

    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const projectionMatrix = m4.perspective(fov, aspect, camera.zNear, camera.zFar);

    const cTarget = new v3(
        cPosition.x + camera.targetSub[0],
        cPosition.y + camera.targetSub[1],
        cPosition.z + camera.targetSub[2]
    );

    const up = v3.copy(camera.up);

    cTarget.xRotateAround(camera.rotation[0] * degToRad, cPosition);
    cTarget.yRotateAround(camera.rotation[1] * degToRad, cPosition);
    up.zRotateAround(camera.rotation[2] * degToRad, v3.zero());

    var cameraProperties = {
        cameraPosition: camera.position,
        target: cTarget.toArray(),
        up: up.toArray(),
        projectionMatrix: projectionMatrix
    }

    return cameraProperties;
}

function main() {

    var objectsToDraw = [];
    var canvas = document.querySelector("#canvas");
    var gl = canvas.getContext("webgl");
    if (!gl) {
        return;
    }

    var programInfo = webglUtils.createProgramInfo(gl, ["vertex-shader-3d", "fragment-shader-3d"]);

    function degToRad(d) {
        return d * Math.PI / 180;
    }

    // Create info about 3 different figures
    objectsToDraw.push(CreateCubeInfo(gl, programInfo, [0.5, 1, 0.5, 1], [0, 0, 0]));
    objectsToDraw.push(CreateConeInfo(gl, programInfo, [0.5, 1, 0.5, 1], [50, 0, 0]));
    objectsToDraw.push(CreateSphereInfo(gl, programInfo, [0.5, 1, 0.5, 1], [-50, 0, 0]));

    function computeMatrix(viewProjectionMatrix, translation, rotation, scale) {
        var matrix = m4.translate(viewProjectionMatrix,
            translation[0],
            translation[1],
            translation[2]);
        matrix = m4.xRotate(matrix, rotation[0]);
        matrix = m4.yRotate(matrix, rotation[1]);
        matrix = m4.zRotate(matrix, rotation[2]);

        matrix = m4.scale(matrix, scale, scale, scale);

        return matrix;
    }

    var camera = CameraInitialize();

    requestAnimationFrame(drawScene);

    function drawScene() {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        camera = CameraUpdateValues(camera);

        var cameraProperties = CalculateCamera(gl, camera, degToRad(1));

        var cameraMatrix = m4.lookAt(cameraProperties.cameraPosition, cameraProperties.target, cameraProperties.up);

        var viewMatrix = m4.inverse(cameraMatrix);

        var viewProjectionMatrix = m4.multiply(cameraProperties.projectionMatrix, viewMatrix);

        objectsToDraw[0].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationCubeValue(), RotationCubeValue(),ScalingCubeValue());
        objectsToDraw[0].shouldBeDrawn = AddElementCube();
        objectsToDraw[1].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationConeValue(), RotationConeValue(), ScalingConeValue());
        objectsToDraw[1].shouldBeDrawn = AddElementCone();
        objectsToDraw[2].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationSphereValue(), RotationSphereValue(), ScalingSphereValue());
        objectsToDraw[2].shouldBeDrawn = AddElementSphere();
        // Draw the objects

        var lastUsedProgramInfo = null;
        var lastUsedBufferInfo = null;

        objectsToDraw.forEach(function(object) {
            var programInfo = object.programInfo;
            var bufferInfo = object.bufferInfo;
            var bindBuffers = false;

            if (object.shouldBeDrawn) {
                if (programInfo !== lastUsedProgramInfo) {
                    lastUsedProgramInfo = programInfo;
                    gl.useProgram(programInfo.program);

                    bindBuffers = true;
                }
                if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
                    lastUsedBufferInfo = bufferInfo;
                    webglUtils.setBuffersAndAttributes(gl, programInfo, bufferInfo);
                }
                webglUtils.setUniforms(programInfo, object.uniforms);
                gl.drawArrays(gl.TRIANGLES, 0, bufferInfo.numElements);
            }
        });


        requestAnimationFrame(drawScene);
    }
}

main();


