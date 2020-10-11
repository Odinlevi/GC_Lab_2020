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
    console.log(object.bufferInfo);
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

    var cameraAngleRadians = degToRad(0);
    var fieldOfViewRadians = degToRad(60);
    var cameraHeight = 50;

    // Create info about 3 different figures
    objectsToDraw.push(CreateCubeInfo(gl, programInfo, [0.5, 1, 0.5, 1], [0, 0, 0]));
    objectsToDraw.push(CreateConeInfo(gl, programInfo, [0.5, 1, 0.5, 1], [50, 0, 0]));
    objectsToDraw.push(CreateSphereInfo(gl, programInfo, [0.5, 1, 0.5, 1], [-50, 0, 0]));

    function computeMatrix(viewProjectionMatrix, translation, rotation) {
        var matrix = m4.translate(viewProjectionMatrix,
            translation[0],
            translation[1],
            translation[2]);
        matrix = m4.xRotate(matrix, rotation[0]);
        matrix = m4.yRotate(matrix, rotation[1])
        return m4.zRotate(matrix, rotation[2]);
    }

    requestAnimationFrame(drawScene);

    function drawScene() {
        webglUtils.resizeCanvasToDisplaySize(gl.canvas);

        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

        gl.enable(gl.CULL_FACE);
        gl.enable(gl.DEPTH_TEST);

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        var aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
        var projectionMatrix =
            m4.perspective(fieldOfViewRadians, aspect, 1, 2000);

        var cameraPosition = [0, 0, 150];
        var target = [0, 0, 0];
        var up = [0, 1, 0];
        var cameraMatrix = m4.lookAt(cameraPosition, target, up);

        var viewMatrix = m4.inverse(cameraMatrix);

        var viewProjectionMatrix = m4.multiply(projectionMatrix, viewMatrix);

        objectsToDraw[0].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationCubeValue(), RotationCubeValue());
        objectsToDraw[0].shouldBeDrawn = AddElementCube();
        objectsToDraw[1].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationConeValue(), RotationConeValue());
        objectsToDraw[1].shouldBeDrawn = AddElementCone();
        objectsToDraw[2].uniforms.u_matrix = computeMatrix(viewProjectionMatrix, TranslationSphereValue(), RotationSphereValue());
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


