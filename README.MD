#Streams
##YouTube
###[Node JS Tutorial for Beginners #13 - Streams and Buffers](https://www.youtube.com/watch?v=GlybFFMXXmQ)
[https://en.wikipedia.org/wiki/Data_buffer](https://en.wikipedia.org/wiki/Data_buffer)
What are Buffers?
Buffers are temporary storage spots for a chunk of data that is being transferred from one place to another.
Move small chunks of data at a time.

What is the difference between a stream and a buffer?
Well streams typically do use buffers to store content streamed so far so that the consumer can take in content as needed.
Producer-consumer pattern
Explain the YouTube video streaming example.


If you're loading a movie on YouTube, you can consume as soon as you're ready. How does this work?
We use a stream via UDP so that the consumer (i.e. the viewer) can immediately start viewing as opposed to waiting
for the whole movie to finish loading.

Great, so what about buffers?
Well the servers don't want to offload the whole movie onto you because YT servers would essentially crash
and would be burdened with so much data. Instead, the producer streams into a buffer stored on the client side
and as the video is streamed, the consumer can ask the producer for more. Why load the whole video if we don't know
if the video will be fully played?

###[https://www.youtube.com/watch?v=E3tTzx0Qoj0](NodeJS Tutorial for Beginners #14 - Readable Streams)
* Writable streams - allow Node to write data to a stream
* Readable streams - allows node to read data from a stream.
* Duplex - can read and write to a stream.

If Node was reading data from a file (read stream), same for writing.
See code.

###[https://www.youtube.com/watch?v=DvlCT0N7yQI](NodeJS Tutorial for Beginners #14 - Readable Streams)

###[https://www.youtube.com/watch?v=a8W90jDHSho](https://www.youtube.com/watch?v=a8W90jDHSho)
Piping - a more elegant way to handle streams being handled immediately.

###Extended Reading on Streams















