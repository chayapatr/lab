run : emcc -O3 -s WASM=1 -s EXTRA_EXPORTED_RUNTIME_METHODS='[cwrap]' module.c
