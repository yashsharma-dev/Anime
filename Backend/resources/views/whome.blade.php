@extends("mylayout")


@section("content")

 <!-- Start New Arrivals Product Area  -->
 <div class="axil-new-arrivals-product-area fullwidth-container bg-color-white axil-section-gap pb--0">
            <div class="container ml--xxl-0">
                <div class="product-area pb--50">
                    <div class="section-title-wrapper">
                        <span class="title-highlighter highlighter-primary"><i class="far fa-shopping-basket"></i> This Week’s</span>
                        <h2 class="title">New Arrivals</h2>
                    </div>
                    <div class="new-arrivals-product-activation slick-layout-wrapper--15 axil-slick-arrow  arrow-top-slide">

                    <!-- <?php foreach($result as $row) { ?> -->
                        <div class="slick-single-layout">
                            <div class="axil-product product-style-four">
                                <div class="thumbnail">
                                    <a href="single-product.html">
                                        <img data-sal="fade" data-sal-delay="100" data-sal-duration="1500" src="assets/images/product/fashion/product-1.png" alt="Product Images">
                                        <img class="hover-img" src="assets/images/product/fashion/product-4.png" alt="Product Images">
                                    </a>
                                    <div class="label-block label-right">
                                        <div class="product-badget">20% OFF</div>
                                    </div>
                                    <div class="product-hover-action">
                                        <ul class="cart-action">
                                            <li class="wishlist"><a href="wishlist.html"><i class="far fa-heart"></i></a></li>
                                            <li class="select-option"><a href="cart.html">Add to Cart</a></li>
                                            <li class="quickview"><a href="#" data-bs-toggle="modal" data-bs-target="#quick-view-modal"><i class="far fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="product-content">
                                    <div class="inner">
                                        <h5 class="title"><a href="single-product.html">hello</a></h5>
                                        <div class="product-price-variant">
                                            <span class="price old-price">$80</span>
                                            <span class="price current-price">$60</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <?php } ?> -->
                       
                        <!-- End .slick-single-layout -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End New Arrivals Product Area  -->

@endsection