# corbanbrook-js
Real valued split radix FFT with inverse.

Install: `npm install corbanbrook-js`

Example usage for `corbanbrook-js` can be found in the test directory.

This is a partial fork of dsp.js by @corbanbrook which is no longer maintained.
It's partial in the sense that I've only taken the real valued FFT. I've also 
put together a benchmark against other popular Javascript algorithms 
[here](https://github.com/j-funk/js-dsp-test/).  

Thanks to [Chris Cannam](https://code.soundsoftware.ac.uk/projects/js-dsp-test)
for the original benchmark tool.

Special mention to @Spudd86 for his pull request which contained the
working inverse tranform which is also included here.

Special mention also to Henrik Sorensen who I suspect is two transpiles behind
this code in FORTRAN.
 
The original dsp.js is [here](https://github.com/corbanbrook/dsp.js/).
 