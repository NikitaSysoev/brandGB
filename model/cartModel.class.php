<?php


class cartModel extends Model
{
    public $view = 'cart';
    public $title;

    public function __construct()
    {
        parent::__Construct();
        $this->title .= "Cart";
    }


    public function index($data = NULL, $deep = 0)
    {
        $this->view .= "/" . __FUNCTION__ . '.php';
        $result['men'] = Product::CategoryList(5);
        $result['women'] = Product::CategoryList(6);
        //$result['product'] = Product::StatusProduct(9, 3);
        //$result['new_product'] = Product::NewProduct();
        //$result['sale_product'] = Product::StatusProduct();
        return $result;
    }
}