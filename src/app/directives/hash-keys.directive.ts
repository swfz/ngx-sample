import {
  Directive,
  Input,
  OnChanges,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appHashKeys]'
})
export class HashKeysDirective implements OnChanges {
  // let item of itemsで ${selector}Ofというinputが渡ってくる
  // これがハッシュ
  @Input() appHashKeysOf: any;

  constructor(
    // ディレクティブを定義したコンテナ
    private viewContainerRef: ViewContainerRef,
    // appHashKeysを適用した中身のテンプレート
    private templateRef: TemplateRef<any>
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    // それまで生成されていたDOMを削除
    this.viewContainerRef.clear();
    // キーを取得
    const keys = Object.keys(this.appHashKeysOf);
    keys.forEach(key => {
      // キーごとにテンプレートを生成
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        // let item of itemsのitemの箇所に適用される変数が$implicit
        // ngForOfのようにindex,first,last,even,oddなど独自のテンプレート変数も定義できる
        $implicit: key
      });
    });
  }
}
