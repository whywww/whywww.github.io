---
layout: page
title: Light Field Rendering on 3D Looking Glass Device - A Tutorial
description: An end-to-end system taking as input pictures of holograms captured from different positions using a handheld device such as a mobile phone and display the reconstructed hologram video on a 3D looking glass holographic display device. 
img: https://github.com/whywww/ImageBed/blob/master/light_field.png?raw=true
importance: 1
category: research
---

Haoyu Wei, Tzujui Liu, Pengxiao Hao, Florian Willomitzer, Oliver Cossairt

EE 496, 2020 Win

## Poster

<!-- ![here](https://github.com/whywww/ImageBed/blob/master/holoPoster.png?raw=true) -->
<img width="100%" height="100%" src='https://github.com/whywww/ImageBed/blob/master/holoPoster.png?raw=true'>

## Abstract

Motivated by the need of hologram conservation, we built an end-to-end system that takes as input pictures of holograms captured from different positions using a handheld device such as a mobile phone and display the reconstructed hologram on a 3D looking glass holographic display device. Concretely, we first expand images of a hologram to a light field with multiplane image scene representation, then we generate the complete light field information needed for the looking glass device to display the reconstructed holograms.

## Method

### Light Field Rendering

This part is based on the paper [Mildenhall et al. 2019](https://github.com/Fyusion/LLFF)

1. Taking Photos of your object. 

    The guideline is you should use images where the maximum disparity between views is no more than about 64 pixels (watch the closest thing to the camera and don't let it move more than ~1/8 the horizontal field of view between images). I recommend at least 6 photos and 20-30 images would be the best.

    ![capguide](https://github.com/whywww/ImageBed/blob/master/holo.png?raw=true)

2. System installation & Demo test

    The instructions by the authors are published on github. Here is the way I'm doing and some supplement. 

    Clone the repo from github to your working folder. Make sure CUDA, docker and nvidia-docker are installed on your machine. 

    Run this in the base directory to download a pretrained checkpoint, download a Docker image, and run code to generate MPIs and a rendered output video on an example input dataset:

    ```bash
    # Download packages.
    bash download_data.sh
    sudo docker pull bmild/tf_colmap
    sudo docker tag bmild/tf_colmap tf_colmap

    # Run docker environment. (Change directories accordingly. Run this every time you restart your docker.)
    nvidia-docker run -it \
        --rm \
        -v /:/host \
        -v /dir/for/harddrive/data:/dir/for/data/in/docker/environment \
        --workdir /host$PWD \
        tf_colmap

    # Run demo in docker
    bash demo.sh
    ```

    You should be able to see a video like [this](https://github.com/Fyusion/LLFF/blob/master/imgs/fern.gif) in `data/testscene/outputs/test_vid.mp4`

    Troubleshooting:

    - __File or dir not found in docker environment:__ Check the directories mounted to docker when running the docker environment. Avoid starting docker and running script in the same line. This may cause path confusion in docker environment. 
    - __Trouble running demo.sh:__ run python scripts line by line in demo.sh, check where the problem is. Or redownload test dataset from [here](http://people.eecs.berkeley.edu/~bmild/llff/data/testscene.zip) to get new update.

3. test with your own images.

    Create a working directory named `scenedir` for example, and make a data directory named `images` inside it. Put your photos in `images`. The `scenedir` can be renamed as you like and placed in which ever dir path exists in docker. But `images` folder cannot be renamed.

    Check the format of your photos using `ll` command in linux. Make sure your `images` dir contains only those images, and they ends with `.png, .jpg` or `.JPG` and in the corresponding format. 

    Note, You can convert image format easily in a linux command, for example:

    ```bash
    for file in *.png; do convert $file ${file/%.png/.jpg}; done
    ```

    Now we can write our own bash script and try our photos. Here's an example of mine.

    ```bash
    CUDA_VISIBLE_DEVICES=0,1,2 python imgs2poses.py /host/mnt/scenedir/

    CUDA_VISIBLE_DEVICES=0,1,2 python imgs2mpis.py \
            /host/mnt/scenedir/ \
            /host/mnt/scenedir/mpis_720 \
            --height 720

    mkdir /host/mnt/scenedir/outputs

    python imgs2renderpath.py \
            /host/mnt/scenedir/ \
            /host/mnt/scenedir/outputs/xaxis_path.txt \
            --x_axis

    cd cuda_renderer && make && cd ..

    cuda_renderer/cuda_renderer \
            /host/mnt/scenedir/mpis_720 \
            /host/mnt/scenedir/outputs/xaxis_path.txt \
            /host/mnt/scenedir/outputs/xaxis_vid.mp4 \
            -1 .8 0
    ```

    `CUDA_VISIBLE_DEVICES=0,1,2` specifies which GPU to use. Other parameters are described in 'General step-by-step usage' in the author's github.

    Troubleshooting:

    - __PyramidCU::GenerateFeatureList: an illegal memory access was encountered:__ Some machine configurations might run into problems running the script imgs2poses.py. Try different GPUs in `CUDA_VISIBLE_DEVICES=0,1,2`. If the issue persists, try uncommenting [this line](https://github.com/Fyusion/LLFF/blob/master/llff/poses/colmap_wrapper.py#L33) to stop COLMAP from using the GPU to extract image features.
    - __Error running the script:__ Check `colmap_output.txt` in `scenedir`. If there are images not registered or not paired, it might be the photos do not accord with the guidelines of the system, or image format is incorrect.

4. Collect light field images.

    Here is a python script I wrote to cut all the frames from the video we got.

    ```python
    import cv2
    import os

    # TODO: Please change the directories
    outdir = '/Users/haoyuwei/Desktop/splittedvid_lion/'
    video_dir = '/Users/haoyuwei/mnt/scenedir/outputs/xaxis_vid.mp4'

    cap = cv2.VideoCapture(video_dir)
    try:
        if not os.path.exists(outdir):
            os.makedirs(outdir)
    except OSError:
        print('Error: cannot create dir of output data.')

    id = 0
    while(True):
        ret, frame = cap.read()

        fn = outdir + str(id) +'.png'
        print('Creating...' + fn)
        cv2.imwrite(fn, frame)

        id += 1
    ```

5. Put images to Looking Glass Device

    For installation of the Looking Glass Device, please refer to the official documentation [here](https://docs.lookingglassfactory.com/Gettingstarted/images/Hardware%20Setup%20Guide%20-%20Looking%20Glass%2015-6%20Inch%20Dev%20Kit.pdf). Then, download the HoloPlay Service software [here](https://lookingglassfactory.com/software/holoplay-service) and follow the instruction in the official website [here](https://docs.lookingglassfactory.com/HoloPlayService/?_ga=2.99792022.987789442.1584998920-1680746765.1570509609). 

    After you successfully connect the Looking Glass Device, download the [lightfield photo app](https://lookingglassfactory.com/devtools/lightfield-photo-app). 

    After installation, navigate to the folder where you installed the app, create a new folder in **Lightfield Photosets**, copy all the light field images we get from the previous step into the folder. Activate the app, then you should see a  new photoset in the app. Click it, then click **choose photos**, and select all the lightfield images in that folder. You should see the images being loaded onto the Looking Glass Device. Click **Set Croping**, and adjust the focus and field of view for best display effects. 

    For additional informations, please refer to the official documentation in [here](https://docs.lookingglassfactory.com/LightfieldPhoto/).

