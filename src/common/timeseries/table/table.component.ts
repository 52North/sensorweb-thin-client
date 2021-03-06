import { Component, OnInit } from '@angular/core';
import { DatasetOptions, Time, Timespan } from '@helgoland/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalGeometryViewerComponent } from '../../components/modal-geometry-viewer/modal-geometry-viewer.component';
import { ModalOptionsEditorComponent } from '../../components/modal-options-editor/modal-options-editor.component';
import {
  ModalTimeseriesTimespanComponent,
} from '../../components/modal-timeseries-timespan/modal-timeseries-timespan.component';
import { TimeseriesDiagramPermalink } from '../diagram/diagram-permalink.service';
import { TimeseriesRouter } from '../services/timeseries-router.service';
import { TimeseriesService } from '../services/timeseries.service';

@Component({
  selector: 'n52-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TimeseriesTableComponent implements OnInit {

  public datasetIds: Array<string>;
  public selectedIds: Array<string> = new Array();
  public timespan: Timespan;
  public datasetOptions: Map<String, DatasetOptions>;

  constructor(
    private timeseriesService: TimeseriesService,
    private timeSrvc: Time,
    public permalinkSrvc: TimeseriesDiagramPermalink,
    private modalService: NgbModal,
    public router: TimeseriesRouter
  ) { }

  public ngOnInit() {
    this.permalinkSrvc.validatePeramlink();
    this.datasetIds = this.timeseriesService.datasetIds;
    this.timespan = this.timeseriesService.timespan;
    this.datasetOptions = this.timeseriesService.datasetOptions;
  }

  public deleteTimeseries(internalId: string) {
    this.timeseriesService.removeDataset(internalId);
  }

  public selectTimeseries(selected: boolean, internalId: string) {
    if (selected) {
      this.selectedIds.push(internalId);
    } else {
      this.selectedIds.splice(this.selectedIds.findIndex(entry => entry === internalId), 1);
    }
  }

  public isSelected(internalId: string) {
    return this.selectedIds.find(e => e === internalId);
  }

  public timeChanged(timespan: Timespan) {
    this.updateTime(timespan);
  }

  public jumpToDate(date: Date) {
    this.updateTime(this.timeSrvc.centerTimespan(this.timespan, date));
  }

  public openTimeSettings() {
    const ref = this.modalService.open(ModalTimeseriesTimespanComponent);
    (ref.componentInstance as ModalTimeseriesTimespanComponent).timespan = this.timespan;
    (ref.componentInstance as ModalTimeseriesTimespanComponent).timespanChanged
      .subscribe((timespan: Timespan) => this.updateTime(timespan));
  }

  private updateTime(timespan: Timespan) {
    this.timeseriesService.setTimespan(timespan);
    this.timespan = timespan;
  }

  public updateOptions(options: DatasetOptions, internalId: string) {
    this.timeseriesService.updateDatasetOptions(options, internalId);
  }

  public editOption(options: DatasetOptions) {
    const ref = this.modalService.open(ModalOptionsEditorComponent);
    (ref.componentInstance as ModalOptionsEditorComponent).options = options;
  }

  public showGeometry(geometry: GeoJSON.GeoJsonObject) {
    const ref = this.modalService.open(ModalGeometryViewerComponent, { size: 'lg' });
    (ref.componentInstance as ModalGeometryViewerComponent).geometry = geometry;
  }

}
